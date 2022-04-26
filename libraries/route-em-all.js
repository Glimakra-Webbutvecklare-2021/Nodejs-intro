// dependencies
import path from 'path';

// handle routes
function handle(req) {

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
    return path.normalize(path.resolve() + filePath);
}

// export
export default {
    handle
}