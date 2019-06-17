module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    use: true
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {}
};
