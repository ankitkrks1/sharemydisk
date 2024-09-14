import express from 'express';
import serveIndex from 'serve-index'; // this package is used to server folder like filemanager

import getPort from './utils/getPort';
import getDirectory from './utils/getDirectory';
import getLocalIPAddress from './utils/getIP';
import getHttps from './utils/getHttps';

import https from 'https';
import fs from 'fs';
import path from 'path';

const app = express();
const port = getPort(process.argv);
const location = getDirectory(process.argv);
const isHttps = getHttps(process.argv);

//Servers the Ftp type files stores in Files Folder
app.use('/', express.static(location), serveIndex(location));
// app.use('/', express.static('./scr'))

let sharemydisk = () => {};

if (isHttps) {
  // Read the SSL certificate and key
  const sslOptions = {
    key: fs.readFileSync(path.join(__dirname, '../cert/server.key')),
    cert: fs.readFileSync(path.join(__dirname, '../cert/server.cert')),
  };

  sharemydisk = () => {
    const url = 'https://' + getLocalIPAddress() + ':' + getPort(process.argv);
    https.createServer(sslOptions, app).listen(443, () => {
      console.log('server is up', url);
    });
  };
} else {
  sharemydisk = () => {
    app.listen(port, () => {
      console.log('server is up', 'http://' + getLocalIPAddress() + ':' + port);
    });
  };
}

export default sharemydisk;
