'use strict';

const path = require('path'),
	fs = require('fs');

/*
 * Retrieve and write JSON file
 */
function makeJSON() {
	let json;

	const package_file = path.resolve('./package.json');

	fs.readFile(package_file, function(error, data) {
		if (error) throw error;

		if ((json = JSON.parse(data))) {
			if (!json.scripts) {
				json.scripts = {};
			}

			if (!json.scripts.lint) {
				json.scripts.lint = 'eslint -c .ide/.eslintrc.js src/js';
			}

			if (!json.scripts['lint-css']) {
				json.scripts['lint-css'] = 'stylelint \"src/scss/**/*.*\" --config ./stylelint.config.js';
			}

			// ensure author/license are set
			json.author = 'Whitespace (Scotland), Ltd';
			json.license = 'UNLICENSED';

			fs.writeFile(package_file, JSON.stringify(json, null, '  '));

			process.stdout.write('Package file updated. Please ensure the paths for "lint" and "lint-css" are correct.\n');
		} else {
			throw new Error('JSON data could not be parsed. Check your package.json is not corrupted.');
		}
	});
}

makeJSON();