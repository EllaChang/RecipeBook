/**
 * A server-side module that serves up a static file to the client.
 */

// import necessary Node.js built-in modules
fs = require('fs');
path = require('path');

/**
 * A function that handles errors.
 * @param {Object} err the error object
 * @param {Object} res the response object
 */
function errorHandling (err, res) {
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.write(JSON.stringify(err));
    res.end();
}

/**
 * A function that serves up a static file to the client.
 * @param {String} fileName the full file name
 * @param {Object} res the response object
 */
function RSFile (fileName, res) {
    fs.readFile(fileName, "binary", function(err, data) { // read the file
        if (err) { // handle errors
            errorHandling(err, res);
        } else { // send response otherwise
            
            // arrow function for obtaining content-type from certain file extensions
            typeName = (name) => {
                ext = path.extname(name);
                type = 'image/jpeg';
                switch (ext) {
                    case '.html':
                        type = 'text/html';
                        break;
                    case '.js':
                        type = 'text/javascript';
                        break;
                    case '.css':
                        type = 'text/css';
                        break;
                    case '.txt':
                        type = 'text/plain';
                        break;
                    case '.jpeg':
                        type = 'image/jpeg';
                        break;
                    case '.jpg':
                        type = 'image/jpeg';
                        break;
                }
                return type;
            }

            // continue to send the response
            res.writeHead(200, {'Content-Type': typeName(fileName)});
            res.write(data, "binary");
            res.end();
        }
    })
}

// export the RSFile function from this module
module.exports.RSFile = RSFile;