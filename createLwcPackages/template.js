export const EXPORT = `
import {{syntax}} from "{{lib}}";
{{#plugins}}
import {{syntax}} from "{{{lib}}}";
{{/plugins}}

export {
  {{exportName}},
  {{#plugins}}
  {{exportName}},
  {{/plugins}}
};`;

export const ROLL_UP = `
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
  {{#rollUps}}
  {
    input: [
      {{#input}}
      "{{{.}}}",
      {{/input}}
    ],
    output: {
      dir: "{{{output}}}",
      format: "es"
    },
    plugins: plugins,
  },
  {{/rollUps}}
]`;
