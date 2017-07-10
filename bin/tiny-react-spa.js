#!/usr/bin/env node

var fse = require('fs-extra');
var ncp = require('ncp');
var ArgumentParser = require('argparse').ArgumentParser;
var SCRIPT_ROOT = __dirname + '/..';
var SCRIPT_VERSION = '';

var packageJSON = {
  "name": "",
  "version": "0.0.0",
  "description": "My single page app",
  "repository": "",
  "license": "MIT",
  "main": "src/app.js",
  "devDependencies": {
    "babel-core": "^6.25.0",
    "babel-eslint": "^7.2.3",
    "babel-jest": "^20.0.3",
    "babel-loader": "^7.1.1",
    "babel-plugin-transform-react-remove-prop-types": "^0.4.6",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-1": "^6.24.1",
    "copy-webpack-plugin": "^4.0.1",
    "cross-env": "^5.0.1",
    "css-loader": "^0.28.4",
    "eslint": "^4.1.1",
    "eslint-loader": "^1.8.0",
    "eslint-plugin-import": "^2.6.1",
    "eslint-plugin-react": "^7.1.0",
    "jest": "^20.0.4",
    "node-sass-chokidar": "^0.0.3",
    "prop-types": "^15.5.10",
    "react": "^15.6.1",
    "react-dom": "^15.6.1",
    "react-redux": "^5.0.5",
    "react-router-dom": "^4.1.1",
    "react-test-renderer": "^15.6.1",
    "redux": "^3.7.1",
    "rimraf": "^2.6.1",
    "sass-loader": "^6.0.6",
    "style-loader": "^0.18.2",
    "webpack": "^3.0.0",
    "webpack-dev-server": "^2.5.0"
  },
  "scripts": {
    "start": "npm run clean && webpack && webpack-dev-server --hot --inline --open --content-base dist",
    "build": "npm run clean && cross-env NODE_ENV=production webpack",
    "clean": "rimraf dist",
    "lint": "eslint src",
    "test": "npm run lint && jest"
  }
};

// Get script version
fse.readFile(SCRIPT_ROOT + '/package.json', 'utf8', function(err, data) {
  if (err) {
    console.error('tiny-react-spa: Error: There was a problem fetching the script\'s version. Please file an issue in the project\'s repository.');
    process.exit(0);
  }

  SCRIPT_VERSION = JSON.parse(data).version;

  var parser = new ArgumentParser({
    version: SCRIPT_VERSION,
    addHelp: true,
    description: 'React Single Page App generator with a more traditional approach to static assets'
  });

  parser.addArgument('project-name', {
    help: 'The new project\'s name'
  });

  var args = parser.parseArgs();

  // Check if project name was passed
  if (!args['project-name']) {
    console.dir(args);
  } else {
    const PROJECT_NAME = args['project-name'];

    // Make sure no folders with the same name already exists
    if (fse.existsSync(PROJECT_NAME)){
      console.error('tiny-react-spa: Error: A folder with this name already exists. Please pick another one');
      process.exit(0);
    } else {
      packageJSON.name = PROJECT_NAME;

      var contentFolder = SCRIPT_ROOT + '/out';

      // Create and copy the blank project to the new folder
      ncp(contentFolder, './' + PROJECT_NAME, function (err) {
        if (err) {
          console.error('tiny-react-spa: Error: ' + err);
          process.exit(0);
        }

        // Add package.json to the new project
        fse.outputFile('./' + PROJECT_NAME + '/package.json', JSON.stringify(packageJSON, null, 2),
          function (err) {
            if (err) {
              console.error('tiny-react-spa: Error: ' + err);
              process.exit(0);
            }

            // Get the project's layout file
            fse.readFile('./' + PROJECT_NAME + '/src/containers/Layout/index.js', 'utf8', function (err,data) {
              if (err) {
                console.error('tiny-react-spa: Error: ' + err);
                process.exit(0);
              }

              // Replace thee version with the current active version
              var result = data.replace(/v0\.0\.0/g, 'v' + SCRIPT_VERSION);

              // Rewrite the file
              fse.outputFile('./' + PROJECT_NAME + '/src/containers/Layout/index.js', result, 'utf8', function (err) {
                if (err) {
                  console.error('tiny-react-spa: Error: ' + err);
                  process.exit(0);
                }

                console.log('The project ' + PROJECT_NAME + ' has been created');
                console.log('Install the dependencies and get going by running the following command:');
                console.log('cd ' + PROJECT_NAME + ' && npm install && npm start');
              });
            });
        });
      });
    }
  }
});