module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    /**
     * off 或 0：表示不验证规则。
     * warn 或 1：表示验证规则，当不满足时，给警告
     * error 或 2 ：表示验证规则，不满足时报错
     */
    // nuxt 相关规则
    'nuxt/no-timing-in-fetch-data': 0,
    // eslint 相关规则
    'on-console': 0,
    'spaced-comment': [1, 'always'],
    'no-undef': [
      0,
      {
        $: true
      }
    ],
    'prefer-const': [
      1,
      {
        destructuring: 'all'
      }
    ],
    'object-shorthand': [0, 'consistent'],
    'vue/attributes-order': 0,
    'vue/comment-directive': 0,
    'nuxt/no-cjs-in-config': 0
  }
};
