**Author:** Ankit K Kashyap

# What is this all about?

This is a Node project that serves the directory over local/internet if port forwarding is enabled. Host your local disk on your LAN/WAN so that anyone can access your hard disk over the network by using a web browser for indexing.

# How to host/use/run?

***  Using npx ***
npx hostmydis

`npx sharemydisk -p 80 -d /yourdirectory/path`

*** Using npm ***

Then import in your application to use it. like 

`index.js`

`const sharemydisk = require('sharemydisk')`

`sharemydisk()`

Then 
execute it from command `node index.js -p 3001 -d ../`


**For development:**
1. `npm i`
2. `npm start`

**For production build:**
`npm run build`
Inside `shareMe/app.js`, the build is ready to run anywhere without any `node_module` files. If you want to learn how to build, go to: [https://youtu.be/P1v227ZFqM4](https://youtu.be/P1v227ZFqM4)

Simply download/copy the `shareMe` folder and run the command below, only available after `npm run build`.

# For running with flags:

- `-p` for port
- `-d` for directory.

`node app.js -p 3000 -d ../abc/yourDirectory# sharemydisk`

# Don't know Node.js but still want to use?

1. Download Node.js from the official site or by searching it on Google.
2. `npm i sharemydisk`
3. `npm run build`
4. Copy the folder `./shareMe` where you want to serve the content.
5. Open terminal/powershell and run `node app` in the same path.
