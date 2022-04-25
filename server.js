// use core module http, fs, path
// commonJS || ES6 modules : require || import
import http from 'http';
import fs from 'fs';
import path from 'path';

// set port number
const port = 3000;

// create server
const server = http.createServer((req, res) => {

    // console.log(req.url);

    // default folder
    let filePath = '/public/';

    // handle requests
    switch (req.url) {

        case '/':

            // index.html
            filePath += 'index.html';

            break;

        default:

            // serve file
            filePath += req.url;

            break;
    }

    // use path module
    filePath = path.normalize(path.resolve() + filePath);

    // use fs to read from filesystem...
    fs.readFile(filePath, (error, content) => {

        if (error) {
            console.log('Error:', error);
            res.statusCode = 404;
            res.end();
        } else {
            res.statusCode = 200;

            // todo - set mimetype from file extension, not just 'text/html'...
            // 1 find out file extension using core module path, and some array methods to strip leading dot....    .html => html
            // .html => html
            // const fileExtension = path.extname(filePath);
            const fileExtension = path.extname(filePath).split(".").pop();
            console.log("fileExtension:", fileExtension);

            // 2 serve media type using object property
            const mimeTypes = {
                html: "text/html",
                htm: "text/html",
                css: "text/css",
                js: "text/javascript",
                png: "image/png"
            }

            const contentType = mimeTypes[fileExtension] || "application/octet-stream";
            // res.setHeader('Content-Type', 'text/html');
            res.setHeader('Content-Type', contentType);
            res.end(content);
        }
    });
});

// listen to requests
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});