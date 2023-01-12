module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: ["**/env.js", "**/*.config.js"],
  plugins: ["import", "prettier", "unused-imports", "simple-import-sort"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  extends: [
    "next",
    "turbo",
    "airbnb-typescript",
    "next/core-web-vitals",
    "prettier",
  ],
  rules: {
    // default rules
    semi: ["error", "always"],
    // "quotes": ["error", "single"],
    "comma-dangle": ["error", "always-multiline"],
    "no-tabs": ["error", { allowIndentationTabs: true }],
    "no-multi-spaces": ["error", { ignoreEOLComments: false }],
    "space-before-blocks": ["error"],
    "no-irregular-whitespace": ["error"],
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
    "no-unused-vars": [
      "error",
      { vars: "all", args: "none", ignoreRestSiblings: true },
    ],
    "max-len": [
      "error",
      { code: 80, tabWidth: 2, ignoreComments: true, ignoreUrls: true },
    ],

    // react rules
    "react/jsx-key": ["error"],
    "react/jsx-indent": ["error", "tab"],
    "react/jsx-indent-props": ["error", "tab"],
    "react-hooks/exhaustive-deps": ["off"],

    // next rules
    "@next/next/no-html-link-for-pages": "off",

    // typescript eslint rules
    "@typescript-eslint/default-param-last": ["off"],

    // import rules
    "import/extensions": ["off"],

    // prettier rules
    "prettier/prettier": ["error", { endOfLine: "auto" }],

    // unused imports rules
    "unused-imports/no-unused-imports": ["error"],

    // simple import rules
    "simple-import-sort/exports": ["error"],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^react.*", "^next.*", "^(?!src|.?./|.+\\.(s?css|less)$).*"],
          ["^src"],
          [
            "^\\.\\.(?!/?$)",
            "^\\.\\./?$",
            "^\\./(?=.*/)(?!/?$)",
            "^\\.(?!/?$)",
            "^\\./?$",
          ],
          ["^.+\\.(s?css|less)$"],
        ],
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".android.js", ".ios.js", ".js", ".jsx", ".ts", ".tsx"],
        paths: ["./"],
      },
    },
  },
};
