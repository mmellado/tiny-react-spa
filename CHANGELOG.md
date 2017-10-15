# tiny-react-spa CHANGELOG

## v1.3.1

[Diff](https://github.com/airtame/airtame-gooey-react/compare/v1.3.0...v1.3.1)

- Converted `peerDependencies` to `devDependencies`

## v1.3.0

[Diff](https://github.com/airtame/airtame-gooey-react/compare/v1.2.1...v1.3.0)

- Output dependencies are now read directly from package.json
- Webpack config was updated
  - `devServer` params were moved from inline to webpack.config.js
  - `url-loader` for fonts was removed in favor of ignoring `url()` in the `css-loader`
  - Added `path` to properly set pathnames for `output` and `devServer` files
  - Added `historyApiFallback` to the development server
- Updated output dependency versions
- Ran Prettier over the entire codebase
- Added Prettier as an output dependency and as part of the ESLint rules
- Added a `<Switch>` component wrapping the layout and routes of the base project
- Added an additional export to the components (Connected components are still exported as the default)
- Slight copy updates to the script's output logs
- Added a yarn.lock

## v1.2.1

[Diff](https://github.com/airtame/airtame-gooey-react/compare/v1.2.0...v1.2.1)

- Updated dependencies
- Added tracking for output dependencies

## v1.2.0

[Diff](https://github.com/airtame/airtame-gooey-react/compare/v1.1.0...v1.2.0)

- Fixed output of production build (no more production warnings etc)
- Updated all static assets to be pulled from a relative path
- Removed the enforced port for the dev server

## v1.1.0

[Diff](https://github.com/airtame/airtame-gooey-react/compare/v1.0.0...v1.1.0)

- Updated script to set the version on the output layout from package.json
- Updated script to output the version with `-v` by grabbing it from package.json
- Standardized error outputs
- Fixed typos and added badges to README
