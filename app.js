const express = require("express");
const path = require("path");

var serveIndex = require("serve-index"); // this package is used to server folder like filemanager
const app = express();
const getPort = require("./src/getPort");
const getDirectory = require("./src/getDirectory");
const getLocalIPAddress = require("./src/getIP");
const port = getPort(process.argv);

const location = getDirectory(process.argv);

//Servers the Ftp type files stores in Files Folder
app.use("/", express.static(location), serveIndex(location));
// app.use('/', express.static('./scr'))

const sharemydisk = () => {
  app.listen(port, () => {
    console.log("server is up",'http://'+getLocalIPAddress()+':'+ port);
  });
};

module.exports = sharemydisk