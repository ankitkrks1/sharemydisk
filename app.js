const express = require('express')
const path = require('path')
const cors = require('cors')
var serveIndex = require('serve-index') // this package is used to server folder like filemanager
const app = express()
const getPort = require('./src/getPort')
const getDirectory = require('./src/getDirectory')
const port = getPort(process.argv)

const location = getDirectory(process.argv)

app.use(cors())

//Servers the Ftp type files stores in Files Folder
app.use('/', express.static(location), serveIndex(location))
// app.use('/', express.static('./scr'))




app.listen(port,()=>{
    console.log('server is up','http://localhost:'+port)
})
