// NPM Dependencies
import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
  'process.env.PORT': 5000
};

// Export Object Literal with properties to configure Webpack
export default {
  debug: true,                                    // Display debug info
  devtool: 'source-map',
  noInfo: false,                                  // Webpack display list of files being bundled
  // Define Entry Points and inject Middleware
  entry: path.resolve(__dirname, 'src/index'),    // Entry Point of app passed in last
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
  // Notify Webpack of source file location
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),  // Optimise order files bundled for optimal minification
    new webpack.DefinePlugin(GLOBALS),            // Define variables to make avail to libraries bundled by Webpack and remove things like PropTypes in Prod
    new ExtractTextPlugin('styles.css'),          // Extract CSS into separate Prod file
    new webpack.optimize.DedupePlugin(),          // Eliminate duplicate packages in final bundle
    new webpack.optimize.UglifyJsPlugin()         // Minify JS bundle
  ],
  // Notify Webpack of file types to handle
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},  // JS using Babel to transpile
      {test: /(\.css)$/, loader: ExtractTextPlugin.extract("css?sourceMap")},

      // Bootstrap file types
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};
