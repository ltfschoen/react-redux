// Express config to support Webpack dev middleware

import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */

const port = 3000;
const app = express();                    // Create Express instance
const compiler = webpack(config);         // Create Webpack instance with config defined

// Webpack dev middleware passed Webpack compiled config
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,                           // Omit command line info when runs
  publicPath: config.output.publicPath    // Public path defined in Webpack config
}));

// Webpack hot middleware passed Webpack compiled config
app.use(require('webpack-hot-middleware')(compiler));

// Serve index.html for all requests
app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

// Start Express
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
