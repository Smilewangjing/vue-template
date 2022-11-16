module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb-base',
        'plugin:prettier/recommended',
        'prettier'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: ['vue', '@typescript-eslint', 'prettier'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        quotes: ['error', 'single'],
        'no-use-before-define': 'off',
        'no-undef': 'off',
        'no-shadow': 'off',
        'no-labels': 'off',
        'linebreak-style': 'off',
        'import/prefer-default-export': 'off',
        'prettier/prettier': 'error',
        'import/no-unresolved': 'off',
        'class-methods-use-this': 'off',
        'import/extensions': 'off',
        '@typescript-eslint/no-explicit-any': ['off'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'no-restricted-syntax': ['off'],
        'guard-for-in': 'off',
        'vue/multi-word-component-names': ['off'],
        'no-unused-vars': 'off',
        'no-param-reassign': 'off',
        'import/no-extraneous-dependencies': 'off',
        'prefer-promise-reject-errors': 'off',
        'no-return-assign': 'off',
        'vue/no-setup-props-destructure': 'off'
    }
}
