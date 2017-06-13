Installation

Use git submodules to add the repository to your local project:

```
git submodule add ssh://git@git.whitespacers.com/home/git/projects/development/whitespace_dev_env.git .ide
```

Then run:

```
.ide/install
```

(**Ensuring you run it from your package directory**, not within `.ide`!)

Included are development specific tools that should be centralised across the WS dev team. The current contents are:

 - `.jshintrc` - Settings file for a local jshint setup.
 - `.eslintrc.js` - Settings file for a local eslint setup - used for linting ES6/Next JS.
 - `.csslintrc` - Settings file for a local CSS lint setup.

# Usage

If using a file within this repository, please **do not** create copies or move files out of this repository when attaching as a submodule. The intention of this submodule is to provide your environment with up to date and centralised environment helpers which can be improved over time. Either create symlinks (`ln -s sourcefile linkfile`) or alter configurations to point towards the files directly (`... -c .ide/eslintrc.js`, for instance).

## Comitting .ide links

Please feel free to commit symlinks created for the purpose above. OS differences aside, this will make it easier for other developers to use your incumbent build and linting tools without having to create their own links.

## Manual installation

The `install` script will do most of the work for you, but if you would like to manually create any links to the IDE, the following guides may be useful.

### eslint

ESLint is used for validating ES2015 / Node JS code. It is automatically created as an npm task called `lint`. To install manually, perform the following steps:

`npm i eslint -D`

And then add something like the following to your project's `package.json` file:

```
{
	"scripts": {
		"lint": "eslint -c .ide/.eslintrc.js src/js"
	}
}
```

`npm run lint`

You can also run it directly from the node_modules folder in your own project:

`node_modules/eslint/bin/eslint.js -c .ide/.eslintrc.js src/js`

**Within Sublime Text**

If you're using the SublimeLinter-contrib-eslint plugin with SublimeLinter, simply add the following configuration to the `linters` object:

```
    "linters": {
        "eslint": {
            "args": [
                "--config", ".ide/.eslintrc.js"
            ]
        }
    }
```

Or, if you already have a global eslint setup or don't want to override the global settings, add a symlink for the `.eslintrc.js` file in your project root.

### Stylelint

Stylelint is used for linting SCSS and CSS. It is automatically created as an npm task called `lint-css`. To install manually, perform the following steps:

`npm i stylelint -D`

And then add something like the following to your project's `package.json` file:

```
{
	"scripts": {
		"lint-css": "stylelint \"src/scss/**/*.*\" --config .ide/stylelint.config.js"
	}
}
```

### Git Hooks

Git hooks are optionally created during automated installation. For information on manually creating Git hooks, see `git/README.md`.

### jshint & csslint (sort-of deprecated)

There are also `.*rc` files for the two linters we use on [wslint](http://dev.development.whitespacers.com/wslint/), but this method of linting is being deprecated in favour of local linting and pre-commit checks. Feel free to use them in the interim with whatever IDE you prefer.