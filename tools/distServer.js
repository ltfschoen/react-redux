import express from 'express';
import path from 'path';
// import open from 'open';
import compression from 'compression';

/*eslint-disable no-console */

const port = 5000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Node.js prod app running');
    // open(`http://localhost:${port}`);
  }
});
