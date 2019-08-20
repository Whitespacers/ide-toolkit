module.exports = {
	'extends': ['eslint:recommended', 'plugin:react/recommended'],
	'parser': 'babel-eslint',
	'parserOptions': {
		'sourceType': 'module',
		'ecmaFeatures': {
			'jsx': true
		}
	},
	'plugins': ['react'],
	'env': {
		'browser': true,
		'node': true,
		'mocha': true,
		'es6': true,
		'jquery': true
	},
	'rules': {
		// errors
		'guard-for-in': 'warn',
		'indent': ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		'quotes': ['warn', 'single'],
		'semi': ['error', 'always'],
		'eqeqeq': 'error',
		'no-eval': 'error',
		'no-self-compare': 'error',
		'no-useless-escape': 'warn',
		'no-with': 'error',
		'radix': 'error',
		'vars-on-top': 'error',
		'keyword-spacing': ['error', { 'after': true, 'before': true }],
		'space-before-blocks': ['error', 'always'],

		// misc
		'max-statements': ['error', 50],

		// warn styles
		'array-bracket-spacing': ['warn', 'never'],
		'brace-style': [
			'warn',
			'1tbs',
			{
				'allowSingleLine': false
			}
		],
		'comma-dangle': ['warn', 'never'],
		'comma-spacing': [
			'warn',
			{
				'before': false,
				'after': true
			}
		],
		'curly': ['warn', 'all'],

		// error styles
		'no-trailing-spaces': 'error',
		'new-cap': 'error',
		'space-before-function-paren': ['error', 'never'],

		// es6 issues
		'prefer-const': ['error'],
		'no-var': 'warn',
		'no-useless-rename': 'error'
	}
};
