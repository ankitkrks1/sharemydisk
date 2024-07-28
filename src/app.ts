import express from 'express';
import serveIndex from 'serve-index'; // this package is used to server folder like filemanager
import getPort from './utils/getPort';
import getDirectory from './utils/getDirectory';
import getLocalIPAddress from './utils/getIP';

const app = express();
const port = getPort(process.argv);
const location = getDirectory(process.argv);

//Servers the Ftp type files stores in Files Folder
app.use('/', express.static(location), serveIndex(location));
// app.use('/', express.static('./scr'))

const sharemydisk = () => {
  app.listen(port, () => {
    console.log('server is up', 'http://' + getLocalIPAddress() + ':' + port);
  });
};

export default sharemydisk;
