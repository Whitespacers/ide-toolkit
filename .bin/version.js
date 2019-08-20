const semver = require('semver');

if (process.argv.length < 3) {
	console.error('Error - version number must be specified!');
	process.exit(1);
}

// Create semver version out of typed number
let version = process.argv[2].split('.');

while (version.length < 3) {
	version.push(0);
}

version = version.join('.');

if (!semver.gte(process.version, semver.clean(version.toString()))) {
	console.error('The available node version (' + process.version + ') is OLDER than the required version (' + version.toString() + '). Please check your node version and if necessary install and use NVM to update it before running node scripts within this repository.');
	process.exit(1);
}
