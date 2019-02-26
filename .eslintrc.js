module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    "ecmaVersion": 2017,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/recommended'
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'

    // 关闭vue/attributes-order
    "vue/attributes-order": ["error", {
      "order": []
    }],

    // vue/max-attributes-per-line, 单行时最多设置属性数量为6
    "vue/max-attributes-per-line": ["error", {
      "singleline": 6,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],

    // 允许html-self-closing
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "never",
        "normal": "any",  // 非内容元素 Don't enforce self-closing style
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }],

    // 和格式化代码冲突，选择修改eslint规则
    "vue/html-closing-bracket-spacing": ["error", {
      "startTag": "never",
      "endTag": "never",
      "selfClosingTag": "never"
    }],

    // single line element
    "vue/singleline-html-element-content-newline": ["error", {
      "ignoreWhenNoAttributes": true,
      "ignoreWhenEmpty": true,
      "ignores": ["VueComponent", "pre", "textarea", "a", "span", "i", "button", "p", "div"]
    }],

    // multiline element
    "vue/multiline-html-element-content-newline": ["error", {
      "ignoreWhenEmpty": true,
      "ignores": ["VueComponent", "pre", "textarea", "a", "span", "i", "button", "p", "div"]
  }]


    // ==== something need to get used to ==== //
    // components order: https://vuejs.org/v2/style-guide/#Component-instance-options-order-recommended
  }
}