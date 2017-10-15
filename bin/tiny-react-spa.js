#!/usr/bin/env node

var fse = require('fs-extra');
var ncp = require('ncp');
var ArgumentParser = require('argparse').ArgumentParser;
var projectPackage = require('../package.json');
var SCRIPT_ROOT = __dirname + '/..';
var DEV_DEPENDENCIES = projectPackage.peerDependencies;
var SCRIPT_VERSION = projectPackage.version;

var packageJSON = {
  name: '',
  version: '0.0.0',
  description: 'My single page app',
  repository: '',
  license: 'MIT',
  main: 'src/app.js',
  devDependencies: {},
  scripts: {
    clean: 'rimraf dist',
    start: 'npm run clean && webpack && cross-env NODE_ENV=development webpack-dev-server',
    build: 'npm run clean && cross-env NODE_ENV=production webpack',
    prettier:
      "prettier --print-width 100 --trailing-comma es5 --single-quote true --write './**/*.{js,jsx}'",
    lint: 'eslint src',
    test: 'npm run lint && jest',
  },
};

packageJSON.devDependencies = DEV_DEPENDENCIES;

var parser = new ArgumentParser({
  version: SCRIPT_VERSION,
  addHelp: true,
  description: 'React Single Page App generator with a more traditional approach to static assets',
});

parser.addArgument('project-name', {
  help: "The new project's name",
});

var args = parser.parseArgs();

// Check if project name was passed
if (!args['project-name']) {
  console.dir(args);
} else {
  const PROJECT_NAME = args['project-name'];

  // Make sure no folders with the same name already exists
  if (fse.existsSync(PROJECT_NAME)) {
    console.error(
      'tiny-react-spa: Error: A folder with this name already exists. Please pick another one'
    );
    process.exit(0);
  } else {
    packageJSON.name = PROJECT_NAME;

    var contentFolder = SCRIPT_ROOT + '/out';

    // Create and copy the blank project to the new folder
    ncp(contentFolder, './' + PROJECT_NAME, function(err) {
      if (err) {
        console.error('tiny-react-spa: Error: ' + err);
        process.exit(0);
      }

      // Add package.json to the new project
      fse.outputFile(
        './' + PROJECT_NAME + '/package.json',
        JSON.stringify(packageJSON, null, 2),
        function(err) {
          if (err) {
            console.error('tiny-react-spa: Error: ' + err);
            process.exit(0);
          }

          // Get the project's layout file
          fse.readFile('./' + PROJECT_NAME + '/src/containers/Layout/index.js', 'utf8', function(
            err,
            data
          ) {
            if (err) {
              console.error('tiny-react-spa: Error: ' + err);
              process.exit(0);
            }

            // Replace thee version with the current active version
            var result = data.replace(/v0\.0\.0/g, 'v' + SCRIPT_VERSION);

            // Rewrite the file
            fse.outputFile(
              './' + PROJECT_NAME + '/src/containers/Layout/index.js',
              result,
              'utf8',
              function(err) {
                if (err) {
                  console.error('tiny-react-spa: Error: ' + err);
                  process.exit(0);
                }

                console.log('The project ' + PROJECT_NAME + ' has been created');
                console.log(
                  'Install the dependencies and get started by running the following command:'
                );
                console.log('cd ' + PROJECT_NAME + ' && npm install && npm start');
              }
            );
          });
        }
      );
    });
  }
}
