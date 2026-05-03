import js from '@eslint/js';

export default [
    js.configs.recommended,
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                console: 'readonly',
                process: 'readonly'
            }
        },
        rules: {
            'no-unused-vars': 'warn',
            'no-console': 'off',
            'no-debugger': 'warn',
            'prefer-const': 'error',
            'no-var': 'error',
            'object-shorthand': 'warn',
            'quotes': ['warn', 'single'],
            'indent': ['error', 4],
            'comma-dangle': ['error', 'never'],
            'semi': ['error', 'always'],
            'no-multiple-empty-lines': 'warn',
            'no-trailing-spaces': 'warn',
            'eol-last': ['warn', 'always'],
            'no-underscore-dangle': 'warn',
            'consistent-return': 'warn',
            'default-case': 'warn',
            'eqeqeq': 'error',
            'no-empty-function': 'warn',
            'no-eq-null': 'error',
            'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
            'brace-style': ['error', '1tbs'],
            'comma-spacing': 'error',
            'comma-style': ['error', 'last'],
            'func-call-spacing': ['error', 'never'],
            'keyword-spacing': 'error',
            'lines-between-class-members': ['warn', 'always'],
            'max-len': ['warn', { code: 100, comments: 80, ignoreStrings: true, ignoreTemplateLiterals: true }],
            'array-bracket-spacing': ['warn', 'never'],
            'object-curly-spacing': ['warn', 'always'],
            'space-in-parens': ['warn', 'never'],
            'space-before-function-paren': ['warn', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
            'arrow-spacing': 'warn',
            'arrow-parens': ['warn', 'always'],
            'implicit-arrow-linebreak': ['warn', 'beside'],
            'one-var': ['warn', 'never'],
            'no-unused-expressions': 'warn',
            'require-await': 'warn',
            'no-return-await': 'error',
            'yoda': 'error',
            'no-shadow': 'warn',
            'no-process-exit': 'error',
            'no-sync': 'warn'
        }
    }
];
