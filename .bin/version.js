const semver = require('semver');
const advice = 'Please check your node version and if necessary install and use NVM to update it before running node scripts within this repository.';

if (process.argv.length < 3) {
	console.error('Error - version number must be specified!');
	process.exit(1);
}

// Create semver version out of typed number
let version = process.argv[2].split('.');

while (version.length < 3) {
	version.push(0);
}

if (/[^\d]+/.test(version[0])) {
	version = version.join('.').toString();

	if (!semver.satisfies(process.version, version)) {
		console.error('The available node version (' + process.version + ') is not satisfied by the required version (' + version + '). ' + advice);
		process.exit(1);
	}
} else {
	version = version.join('.');

	if (!semver.gte(process.version, semver.clean(version))) {
		console.error('The available node version (' + process.version + ') is OLDER than the required version (' + version + '). ' + advice);
		process.exit(1);
	}
}
