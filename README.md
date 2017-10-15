# Tiny React SPA
[![npm](https://img.shields.io/npm/v/tiny-react-spa.svg)](https://www.npmjs.com/package/tiny-react-spa)
[![David](https://img.shields.io/david/mmellado/tiny-react-spa.svg)](https://david-dm.org/mmellado/tiny-react-spa)
[![David](https://img.shields.io/david/peer/mmellado/tiny-react-spa.svg)](https://david-dm.org/mmellado/tiny-react-spa?type=peer)

Tiny React SPA is a Single Page App generator which helps you get started with React, Redux and React Router. Unilke many other Single Page App generators, this one takes a more traditional approach to CSS and asset management to make the transition into these technologies a little less intimidating to people trying it for the first time.

NOTE: For now it does not provide server side rendering. If heavily requested, this can be added in the future.

## Install

Install the application globally

```
$ npm install --global tiny-react-spa
```

## Usage

First create a new project by running

```
$ tiny-react-spa [project-name]
```

Enter the newly created project and install all dependencies

```
$ cd [project-name] && npm install
```

Once dependencies are installed, you are ready with a functionally working single page app using React, Redux and React Router.

### Tests

The application comes ready to write and run tests with Jest and a basic ESLint configuration.

You can run

```
$ npm run test
```
This command will run both the linter and unit tests that are currently in your project.

### Production build

Once your application is finished, you can run the following command:

```
$ npm run build
```

This will generate a production version of your application. At this point you can simply export the contents of the `dist` folder to your hosting service for deployment.