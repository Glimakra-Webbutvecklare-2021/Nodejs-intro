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
            res.setHeader('Content-Type', 'text/html');
            res.end(content);
        }
    });
});

// listen to requests
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});