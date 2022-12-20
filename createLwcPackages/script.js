import Mustache from "mustache";
import fs from "fs";
import { $ } from "zx";
import { createMetaXml } from "./create.js-meta.xml.js";
import { EXPORT, ROLL_UP } from "./template.js";

const npmInstall = async (lib, version) => {
  const target = version ? `${lib}@${version}` : lib;
  await $`npm install ${target}`;
};

const createExportFile = async (pkg, path, template) => {
  const output = Mustache.render(template, pkg);
  await fs.writeFile(path, output, (error) => {
    if (error) throw error;
  });
  console.log(path + " created.");
};

const handleExport = async (pkg) => {
  // ライブラリのexportファイルを生成
  const exportDir = `${process.cwd()}/node_modules.lwc/`;
  await createExportFile(pkg, `${exportDir}${pkg.filename}.js`, EXPORT);

  // 依存関係の調査
  const { stdout } = await $`npm info ${pkg.lib}`;
  const npmInfo = stdout
    .split(/[\r|\n|\r\n]+/)
    .map((v) => v.trim())
    .filter((v) => v);

  // 依存パッケージが存在した場合は別でexportファイルを生成
  const hasDependencies = npmInfo.indexOf("dependencies:");
  const dependenceNames = [];
  if (hasDependencies !== -1) {
    const endDependenciesRowNum = npmInfo.indexOf("maintainers:");
    const dependencies = npmInfo
      .slice(hasDependencies + 1, endDependenciesRowNum)
      .map((v) => v.split(":")[0]);

    for (const dependence of dependencies) {
      const obj = {
        lib: dependence,
        syntax: dependence,
        // ケバブケースはキャメルケースに変換
        filename:
          dependence.indexOf("-") === -1
            ? dependence
            : dependence
                .split("-")
                .filter((v) => v !== "-")
                .map((str, i) =>
                  i === 0
                    ? str
                    : str[0].toUpperCase() + str.slice(1).toLocaleLowerCase()
                )
                .join(""),
        version: "",
        exportName: dependence,
        plugins: []
      };
      await createExportFile(obj, `${exportDir}${obj.filename}.js`, EXPORT);
      dependenceNames.push(obj.filename);
    }
  }

  const inputDir = "./node_modules.lwc/";
  const outputDir = "./force-app/main/default/lwc/";
  return {
    input: [
      ...[`${inputDir}${pkg.filename}.js`],
      ...dependenceNames.map((v) => inputDir + v + ".js")
    ],
    output: outputDir + pkg.filename
  };
};

(async function () {
  try {
    const packages = JSON.parse(
      fs.readFileSync(
        process.cwd() + "/createLwcPackages/package.lwc.json",
        "utf8"
      )
    );

    // ライブラリをインストール
    for (const pkg of packages.dependencies) {
      const { lib, version } = pkg;
      await npmInstall(lib, version);
    }

    // インストールしたライブラリのexportファイルを作成し、rollup.configに記載するライブラリのi/oオブジェクトを返却する
    const rollUpConfig = [];
    const moduleDir = process.cwd() + "/node_modules.lwc";
    if (!fs.existsSync(moduleDir)) {
      fs.mkdirSync(moduleDir);
    }
    for (const pkg of packages.dependencies) {
      /**
       * @return {
       *  input: string[],
       *  output: string,
       * }[]
       */
      const config = await handleExport(pkg);
      rollUpConfig.push(config);
    }

    // rollup.config.jsを作成
    const path = `${process.cwd()}/rollup.config.js`;
    await createExportFile({ rollUps: rollUpConfig }, path, ROLL_UP);

    // rollUp実行
    await $`npx rollup -c --bundleConfigAsCjs`;

    for (const { output } of rollUpConfig) {
      const dir = output.slice(2);

      // meta xmlファイル生成
      const xmlPath = `${dir}/${dir.split("/").slice(-1)}.js-meta.xml`;
      await fs.writeFile(xmlPath, createMetaXml(), (error) => {
        if (error) throw error;
      });

      // rollupにより作成されたlwcフォルダ内のファイルの文字数をチェック
      const { stdout } = await $`ls -la ${dir}/*`;
      const fileSizes = stdout
        .split(/[\r|\n|\r\n]+/)
        .map((v) => v.trim())
        .filter((v) => v)
        .map((v) => {
          const fileSize = v.split(/[\s|\t]+/)[4];
          return Number(fileSize);
        });

      const isSizeOver = fileSizes.some((size) => size > 131072);
      if (isSizeOver) {
        console.error(`${output} is size over.`);
        // lwcが仕様変更した？のかファイルサイズ超えたファイルもデプロイできたのでコメントアウト
        // await $`rm -rf ${output}`;
      }
    }
    await $`exit 1`;
  } catch (processOutput) {
    console.error(processOutput);
  }
})();
