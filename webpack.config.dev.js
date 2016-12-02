// NPM Dependencies
import webpack from 'webpack';
import path from 'path';

// Export Object Literal with properties to configure Webpack
export default {
  debug: true,                                    // Display debug info
  devtool: 'inline-source-map',                   // Alternatives options include: cheap-module-eval-source-map
  noInfo: false,                                  // Webpack display list of files being bundled
  // Define Entry Points and inject Middleware
  entry: [
    'eventsource-polyfill',                       // Support hot reloading with IE polyfill for server-sent events
    'webpack-hot-middleware/client?reload=true',  // Built-in hot reloading of page if hot module reloading fails.
    path.resolve(__dirname, 'src/index')          // Entry Point of app passed in last
  ],
  target: 'web',                                  // Use 'web' to bundle so browser interprets. Alternatively target 'node'
  /**
   *  Define Output location for dev bundle. Webpack does not serve any physical files.
   *  Webpack instead creates bundle files in memory to serve to browser.
   *  Path and name provided so Webpack may simulate physical file existence.
   *  Physical files only output by prod build task `npm run build`.
   */
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  // Notify Webpack dev server of source file location
  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),     // Enable replace Modules without requiring full browser refresh
    new webpack.NoErrorsPlugin()                  // Prevents errors breaking hot reloading and just display browser error message instead
  ],
  // Notify Webpack of file types to handle
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},  // JS using Babel to transpile
      {test: /(\.css)$/, loaders: ['style', 'css']},

      // Bootstrap file types
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};
