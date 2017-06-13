module.exports = {
	'rules': {
		// colours
		'color-hex-case': 'lower',
		'color-no-invalid-hex': true,

		// fonts
		'font-family-name-quotes': 'always-unless-keyword',
		'font-family-no-duplicate-names': true,

		// numbers
		'number-leading-zero': 'never',
		'number-max-precision': 10,
		'number-no-trailing-zeros': true,

		// strings
		'string-no-newline': true,
		'string-quotes': 'single',

		// length
		'length-zero-no-unit': true,

		// units
		'unit-whitelist': ['em', 'rem', '%', 's', 'px', 'vh', 'vw', 'deg'],

		// shorthand
		'shorthand-property-no-redundant-values': true,

		// properties
		'property-case': 'lower',

		// indentation
		'indentation': ['tab', {
			'except': ['value']
		}],

		// blocks
		'block-closing-brace-empty-line-before': 'never',
		'block-no-empty': true,

		// general
		'max-empty-lines': 2,
		'no-eol-whitespace': true,
		'no-extra-semicolons': true
	}
};