module.exports = {
  env: {
    node: true,
    mocha: true
  },
  extends: [
    "airbnb-base",
    "prettier",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  plugins: ["prettier", "simple-import-sort"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 11
  },
  rules: {
    "prettier/prettier": "error",
    "no-console": 1,
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
  }
};
