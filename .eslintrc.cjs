module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ["@antfu"],
  rules: {
    "@typescript-eslint/prefer-ts-expect-error": 0,
    "@typescript-eslint/ban-ts-commen": 0,
  },
};
