/**
 * A server-side module that provides utility functions.
 */

/**
 * An exported function that sends a JSON object.
 */
exports.sendJSONObj = function(res,status,out) {
    res.writeHead(status, { "Content-Type" : "application/json" });
    res.write(JSON.stringify(out));
    res.end();
}

/**
 * An exported function that sends texts.
 */
exports.sendText = function(res, status, str) {
    res.writeHead(status, { "content-type": "text/plain" });
    res.write(str);
    res.end();
}