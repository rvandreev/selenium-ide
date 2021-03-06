module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "jest": true,
    "webextensions": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "class-property",
    "react"
  ],
  "rules": {
    "no-trailing-spaces": [
      "error"
    ],
    "no-multiple-empty-lines": [
      "error",
      { "max": 2, "maxEOF": 1 }
    ],
    "eol-last": [
      "error",
      "always"
    ],
    "comma-dangle": [
      "error",
      "never"
    ],
    "indent": [
      "error",
      2,
      { "SwitchCase": 1 }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-console": [
      0
    ],
    "no-var": [
      "error"
    ],
    "no-multi-spaces": [
      "error"
    ],
    "key-spacing": [
      "error",
      {
        "beforeColon": false
      }
    ],
    "space-infix-ops": [
      "error"
    ],
    "comma-spacing": [
      "error"
    ],
    "object-curly-spacing": [
      "error",
      "always"
    ]
  }
};
