// use core module http
// commonJS || ES6 modules : require || import
import http from 'http';

// set port number
const port = 3000;

// create server
const server = http.createServer((req, res) => {
    // console.log(req, res);

    // response - use mime types
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello world</h1><p>Webserver says <i>hello</i></p>');
    res.end();
});

// listen to requests
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});