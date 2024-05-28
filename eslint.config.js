const eslintjs = require("@eslint/js");
const globals = require("globals");

const eslintconfig = [
  eslintjs.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.commonjs,
        ...globals.es2021,
      },
    },
    rules: {},
  },
];

module.exports = eslintconfig;
