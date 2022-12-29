import { LightningElement, track } from "lwc";
import {
  base64Decode,
  base64Encode,
  convertCsvToArray,
  arrayChunk,
  showToastMessage,
  sfCustomObjectNameRule,
  extendValidator,
  isValidJsonFormat,
  delay
} from "c/utils";
import { templateMetadataJson, schema } from "./metadataJson";
import getFolders from "@salesforce/apex/FolderController.getFolders";
import getEdgemartAliasesWithMetadataJson from "@salesforce/apex/InsightsExternalDataController.getEdgemartAliasesWithMetadataJson";
import createBody from "@salesforce/apex/InsightsExternalDataController.createBody";
import createParts from "@salesforce/apex/InsightsExternalDataController.createParts";
import updateBody from "@salesforce/apex/InsightsExternalDataController.updateBody";

export default class CsvUploadToEA extends LightningElement {
  @track edgemartContainers = [];
  @track edgemartAliases = [];
  @track operations = [];
  edgemartContainer = "";
  edgemartAlias = "";
  operation = "";
  metadataJsonMap = {};
  metaDataJson = "";
  file = null;
  fileName = "";
  isFirstUpload = false;
  isAfterFirstUpload = false;
  isOperationByOverwrite = false;
  isInputCompleted = false;
  isSelectedEdgemartAlias = false;
  isSelectedApplication = false;
  isLoading = false;
  loadingBar = 0;

  // 追加予定機能：アップロード失敗ログを表示して削除or失敗時のCSVを取得できるように

  async connectedCallback() {
    extendValidator("sfCustomObjectNameRule", sfCustomObjectNameRule);
    const edgemartContainers = await getFolders();
    this.edgemartContainers = edgemartContainers.map((f) => {
      return {
        label: f.Name,
        value: f.Id
      };
    });
  }

  clearComboBox() {
    this.template.querySelectorAll("lightning-combobox").forEach((each) => {
      each.value = "";
    });
  }

  clearInputArea() {
    this.template.querySelectorAll("lightning-input").forEach((each) => {
      each.value = "";
    });
  }

  clearInputData() {
    this.edgemartContainer = "";
    this.edgemartAlias = "";
    this.operation = "";
    this.file = null;
    this.fileName = "";
    this.metaDataJson = "";
    this.loadingBar = 0;
    this.isLoading = false;
  }

  handleProgress() {
    this.isSelectedApplication = !!this.edgemartContainer;
    const inputs = [
      this.edgemartContainer,
      this.edgemartAlias,
      this.operation,
      this.file
    ];

    this.isInputCompleted = inputs.every((input) => input);
  }

  initialize() {
    this.clearInputData();
    this.clearComboBox();
    this.clearInputArea();
    this.handleProgress();
  }

  setTemplateMetadataJson() {
    this.metaDataJson = JSON.stringify(templateMetadataJson);
  }

  setOperation(operation) {
    this.operation = operation;
    this.isOperationByOverwrite = this.operation === "Overwrite";
  }

  handleOperationsChange(event) {
    this.setOperation(event.detail.value);
    this.handleProgress();
  }

  setOperations() {
    const operations = {
      hasUnique: [
        { label: "Upsert", value: "Upsert" },
        { label: "Delete", value: "Delete" },
        { label: "Overwrite", value: "Overwrite" }
      ],
      noUnique: [
        { label: "Overwrite", value: "Overwrite" },
        { label: "Append", value: "Append" }
      ],
      noMetaData: [{ label: "Overwrite", value: "Overwrite" }]
    };
    const fields = this.metaDataJson
      ? JSON.parse(this.metaDataJson).objects[0].fields
      : null;

    this.operations = fields?.some((field) => field.isUniqueId)
      ? operations.hasUnique
      : fields
      ? operations.noUnique
      : operations.noMetaData;
  }

  handleNewEdgemartAliasChange(event) {
    this.edgemartAlias = event.detail.value;
    this.handleProgress();
  }

  handleEdgemartAliasChange(event) {
    this.edgemartAlias = event.detail.value;
    this.metaDataJson = this.metadataJsonMap.find(
      ({ alias }) => alias === this.edgemartAlias
    ).metaDataJson;
    this.setOperations();
    this.isSelectedEdgemartAlias = true;
    this.handleProgress();
  }

  setEdgemartAliases() {
    this.edgemartAliases = this.metadataJsonMap.map(({ alias }) => {
      return {
        label: alias,
        value: alias
      };
    });
  }

  handleFormDisplay(isFirstUpload, isAfterFirstUpload) {
    this.isFirstUpload = isFirstUpload;
    this.isAfterFirstUpload = isAfterFirstUpload;
    this.metaDataJson = "";
    this.edgemartAlias = "";
    this.isSelectedEdgemartAlias = false;
  }
  /**
   *
   * @param {*} event
   */
  async handleApplicationChange(event) {
    this.edgemartContainer = event.detail.value;
    const EdgemartAliasesWithMetadataJson =
      await getEdgemartAliasesWithMetadataJson({
        edgemartContainer: this.edgemartContainer
      });

    this.metadataJsonMap = Object.keys(EdgemartAliasesWithMetadataJson)
      .map((keyOfEncodedMeta) => {
        const edgemartAlias =
          EdgemartAliasesWithMetadataJson[keyOfEncodedMeta].EdgemartAlias;
        return {
          alias: edgemartAlias,
          metaDataJson: base64Decode(keyOfEncodedMeta)
        };
      })
      .reduce((prev, { alias, metaDataJson }) => {
        const found = prev.find((v) => v.alias === alias);
        if (!found) {
          prev.push({ alias, metaDataJson });
        }
        return prev;
      }, []);

    if (!this.metadataJsonMap.length) {
      this.handleFormDisplay(true, false);
      this.setOperation("Overwrite");
    } else {
      this.handleFormDisplay(false, true);
      this.setEdgemartAliases();
      this.setOperation("");
    }
    this.handleProgress();
  }

  handleCsvUpload(event) {
    this.file = event.detail.files[0];
    this.fileName = this.file.name;
    this.handleProgress();
  }

  validation() {
    if (this.isFirstUpload) {
      return sfCustomObjectNameRule(this.edgemartAlias);
    }
    if (this.isOperationByOverwrite) {
      this.metaDataJson =
        this.template.querySelector("lightning-textarea").value;
      if (this.metaDataJson) {
        return isValidJsonFormat(JSON.parse(this.metaDataJson), schema);
      }
    }
    return true;
  }

  async handleUpload() {
    try {
      this.isLoading = true;
      const isPassed = this.validation();
      if (!isPassed) {
        showToastMessage(
          this,
          "Upload Failed",
          "データセット名、またはメタデータの形式が正しくありません",
          "error"
        );
        return;
      }

      const externalData = await createBody({
        edgemartAlias: this.edgemartAlias,
        edgemartContainer: this.edgemartContainer,
        metaDataJsonString: this.metaDataJson
          ? await base64Encode(this.metaDataJson)
          : "",
        Operation: this.operation
      });
      const externalDataId = externalData.Id;

      // csvを1万行数で分割
      const csvArray = await convertCsvToArray(this.file);
      const csvHead = csvArray[0];
      const csvRows = csvArray.slice(1, csvArray.length);
      const csvChunkRows = arrayChunk(csvRows, 1000);

      // 1000*10の1万のデータでExternalDataPartの登録処理を実行
      let partNumberOffset = 0;
      const partNumberLimit = 10;
      let csvParts = [];
      let counter = 0;
      for await (const csvChunkRow of csvChunkRows) {
        /**
         * InsightsExternalDataApiの仕様として
         * 複数partNumberでデータ登録するとき最初は
         * ヘッダーあり、以降は先頭に改行がある構造にする必要がある
         */
        const prefix = !counter ? [csvHead] : ["\n"];
        csvParts.push([...prefix, ...csvChunkRow]);
        const isChunkLimit = csvParts.length >= partNumberLimit;
        const isLastChunk = counter === csvChunkRows.length - 1;

        if (isLastChunk || isChunkLimit) {
          const csvFileString = await Promise.all(
            csvParts
              .map((part) => part.join("\n"))
              .map(async (v) => {
                const encodedCsvPart = await base64Encode(v);
                return encodedCsvPart;
              })
          );

          await createParts({
            externalDataId,
            csvFileString,
            partNumberOffset
          });
          if (isLastChunk) {
            this.loadingBar = 100;
            break;
          } else if (isChunkLimit) {
            partNumberOffset += partNumberLimit;
            csvParts = [];
          }
        }
        this.loadingBar = (100 / csvChunkRows.length) * counter + 1;
        counter++;
        await delay(1);
      }

      // アップロード
      updateBody({ externalDataId });
      showToastMessage(
        this,
        "Upload Success",
        "アップロードに成功しました",
        "success"
      );
    } catch (e) {
      console.error("upload error", e);
      showToastMessage(
        this,
        "Upload Failed",
        "アップロードに失敗しました",
        "error"
      );
    } finally {
      this.initialize();
    }
  }
}
