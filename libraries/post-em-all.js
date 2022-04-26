// dependencies
import fs from 'fs';
import path from 'path';
import querystring from 'querystring';

function handle(req, res) {

    console.log("Module post-em-all...");
    // post coming from a request

    // prepare variable containing data
    // use string concatenation
    let formBody = ""; 

    // listen on incoming data
    req.on('data', (chunk) => {
        formBody += chunk;
        // console.log("chunk:", chunk);
        // check size... formBody.length > ?
    });

    // listen on data completed
    req.on('end', () => {
        // console.log("formBody", formBody);
        let content = querystring.parse(formBody);
        // console.log(content);

        let jsonData = JSON.stringify(content);
        // console.log(jsonData);

        // path to folder
        let pathToFile = path.normalize(path.resolve() + '/data');

        // check if folder exists - if not - create
        if (!fs.existsSync(pathToFile)) {

            // create folder
            fs.mkdirSync(pathToFile);
        }

        // save content
        let file = pathToFile + "/content.json";
        fs.writeFileSync(file, jsonData);
    });
}

// export in order to use as a module
export default {
    handle
}