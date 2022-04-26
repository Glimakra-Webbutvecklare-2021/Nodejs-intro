// use core module http, fs, path
// commonJS || ES6 modules : require || import
import http from 'http';
import fs from 'fs';
import path from 'path';

// use my own modules, utilities
import { getContentType } from './libraries/utils.js';
import routeEmAll from './libraries/route-em-all.js';
import postEmAll from './libraries/post-em-all.js';

// set port number
const port = 3000;

// create server
const server = http.createServer((req, res) => {

    // console.log(req.url, req.method);

    // posts...
    if (req.method === "POST") {
        postEmAll.handle(req, res);
    }

    let filePath = routeEmAll.handle(req);
    
    // use fs to read from filesystem...
    fs.readFile(filePath, (error, content) => {

        if (error) {
            console.log('Error:', error);
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>Sorry - 404</h1><p>Page not found - <a href="/">Perhaps you should try start page</a></p>');
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', getContentType(filePath));
            res.end(content);
        }
    });
});

// listen to requests
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});