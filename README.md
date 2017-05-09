## Zendesk App Migrator

TODO: Add build statuses

### What is it?

The App Migrator ("ZAF") is CLI tool for assisting with the migration of v1 App Framework apps to v2

### How does it work?

The migrator executes a series of tasks to:
- Reorganise files and folders
- Update the manifest file
- Rewrite Javascript code from app.js to CommonJS modules
- Creates an HTML file from template that imports all the necessary deps., including v1 shims/helpers
- ?

#### App Scaffold

The migrator has a hard dependency on the public [App Scaffold](https://github.com/zendesk/app_scaffold) project.

### For development...

Source files are under `lib`, test files under `test`.  The codebase currently makes use of ES6 features enabled by the `--harmony` flag.

#### Setting up your dev environment

You will need:

* `Yarn`
* `NodeJS`

`brew install yarn && yarn install`

#### Dependencies

Dependencies are declared via `yarn` in the `package.json` file.

#### Running tests

`yarn test`

Tests are run using the `mocha` test runner.  `chai` is the assertion library.

### Deployment

The App Migrator will be deployed as a node package, and/or as a dependency of other projects.