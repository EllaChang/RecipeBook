/**
 * A server-side module that runs the HTTP server.
 */

// import essential built-in modules
http = require('http');
fs = require('fs');
url = require('url');
path = require('path');

// import the RSFile function from fileServer.js
fileServer = require('./fileServer.js');

// import the processQuery function from albumQuery.js
queryServer = require('./queryServer.js');

/**
 * A function that creates a server obejct.
 */
http.createServer(function (req, res) {
    var queryObj = url.parse(req.url, "true").query;
    var path = url.parse(req.url).pathname;
    fileName = "public_html" + path;
    
    // read and serve a static file if the URL contains a file path
    if (path && path.length > 1) {
        fileServer.RSFile(fileName, res);
    }

    // process and respond to query if the URL contains a query
    if (queryObj.request) {
        queryServer.processQuery(queryObj, res);
    }
}).listen(8080);