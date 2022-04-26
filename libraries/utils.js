// handle mime types
export function getContentType(fileExtension) {

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

    const contentType = mimeTypes[fileExtension] || "application/octet-stream";
    
    return contentType;
}