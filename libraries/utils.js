// dependencies
import path from 'path';

// handle mime types
export function getContentType(filePath) {

    const fileExtension = path.extname(filePath).split(".").pop();
    // console.log("fileExtension:", fileExtension);

    // 2 serve media type using object property
    const mimeTypes = {
        html: "text/html",
        htm: "text/html",
        css: "text/css",
        js: "text/javascript",
        png: "image/png",
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        gif: "image/gif",
        webp: "image/webp"
    }

    return mimeTypes[fileExtension] || "application/octet-stream";
}