'use strict';

const path = require('path'),
	fs = require('fs');

/*
 * Retrieve and write JSON file
 */
function makeJSON() {
	let json;

	const package_file = path.resolve('./package.json'),
		scripts = {
			lint: 'eslint -c .ide/.eslintrc.js src/js',
			'lint-css': 'stylelint \"src/scss/**/*.*\" --config ./stylelint.config.js'
		};

	fs.readFile(package_file, function(error, data) {
		let key;

		if (error) throw error;

		if ((json = JSON.parse(data))) {
			if (!json.scripts) {
				json.scripts = {};
			}

			for (key in scripts) {
				if (scripts.hasOwnProperty(key)) {
					if (!json.scripts[key]) {
						json.scripts[key] = scripts[key];
					} else {
						process.stdout.write(
							`NPM Script "${key}" could not be added automatically. If you would like to add` +
							` this under a different name, the command is: "${scripts[key]}".\n`
						);
					}
				}
			}

			// ensure author/license are set
			json.author = 'Whitespace (Scotland), Ltd';

			if (!json.license || json.license === 'ISC') {
				// license not set or default NPM init license
				json.license = 'UNLICENSED';
			}

			fs.writeFile(package_file, JSON.stringify(json, null, '  '));

			process.stdout.write('Package file updated. Please ensure the paths for "lint" and "lint-css" are correct.\n');
		} else {
			throw new Error('JSON data could not be parsed. Check your package.json is not corrupted.');
		}
	});
}

makeJSON();