// More info on Webpack's Node API here: https://webpack.github.io/docs/node.js-api.html
// Allowing console calls below since this is a build file.
/*eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production'; // Set environment to Prod to exclude Hot Reloading code

console.log('Generating minified bundle for production via Webpack. This will take a moment...'.blue);

// Run Webpack in Prod mode and display notifications to console
webpack(webpackConfig).run((err, stats) => {
  if (err) { // fatal error
    console.log(err.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings: '.bold.yellow);
    jsonStats.warnings.map(warning => console.log(warning.yellow));
  }

  console.log(`Webpack stats: ${stats}`);

  // Build succeeded.
  console.log('App compiled in production mode successfully and written to /dist'.green);

  return 0;
});
