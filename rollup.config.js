
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import nodeBuiltins from "rollup-plugin-node-builtins";
import nodeGlobals from "rollup-plugin-node-globals";
import terser from "@rollup/plugin-terser";

const plugins = [
  commonjs(),
  nodeBuiltins(),
  nodeGlobals({ buffer: false }),
  nodeResolve(),
  terser()
];

export default [
  {
    input: [
      "./node_modules.lwc/jsonschema.js",
    ],
    output: {
      dir: "./force-app/main/default/lwc/jsonschema",
      format: "es"
    },
    plugins: plugins,
  },
]