// Since cURL 7.42.0 we have to use --path-as-is parameter
// to access upper directories so I used it to test requests for this task

// Therefore our test commands will look like this:
// curl --path-as-is http://localhost:8000/ -> will pass
// curl --path-as-is http://localhost:8000/../.. -> won't pass

// Dependencies initialization
import http from 'http';
import fs from 'fs';
import { parse } from 'url';
import mime from 'mime';

var methods = Object.create(null);

// Creating server
http.createServer(
    function (request, response) {
        function respond(code, body, type) {
            if (!type) type = 'text/plain';
            response.writeHead(code, { 'Content-Type': type });
            if (body && body.pipe) {
                body.pipe(response);
            } else { response.end(body); }
        }
        if (request.method in methods) {
            methods[request.method](urlToPath(request.url),
                respond, request);
        } else {
            respond(405, 'Method ' + request.method +
            ' not allowed.');
        }
    }).listen(8000);

// Task function
function urlToPath(url) {
    var path = parse(url).pathname;
    var result = '.' + decodeURIComponent(path);
    // Repeating until replacement isn't needed
    for (;;) {
        var replaced = result.replace(/(\/|\\)\.\.(\/|\\|$)/, '/');
        if (replaced === result) return result;
        result = replaced;
    }
}
// GET method function
methods.GET = function (path, respond) {
    fs.stat(path, function (error, stats) {
        if (error && error.code === 'ENOENT') {
            respond(404, 'File not found');
        } else if (error) {
            respond(500, error.toString());
        } else if (stats.isDirectory()) {
            fs.readdir(path,
                function (error, files) {
                    if (error) {
                        respond(500, error.toString());
                    } else { respond(200, files.join('\n')); }
                });
        } else {
            respond(200, fs.createReadStream(path),
                mime.lookup(path));
        }
    });
};

// DELETE method function
methods.DELETE = function (path, respond) {
    fs.stat(path, function (error, stats) {
        if (error && error.code === 'ENOENT') {
            respond(204);
        } else if (error) {
            respond(500, error.toString());
        } else if (stats.isDirectory()) {
            fs.rmdir(path, respondErrorOrNothing(respond));
        } else { fs.unlink(path, respondErrorOrNothing(respond)); }
    });
};

function respondErrorOrNothing(respond) {
    return function (error) {
        if (error) { respond(500, error.toString()); } else { respond(204); }
    };
}

// PUT method function
methods.PUT = function (path, respond, request) {
    var outStream = fs.createWriteStream(path);
    outStream.on('error', function (error) {
        respond(500, error.toString());
    });
    outStream.on('finish', function () {
        respond(204);
    });
    request.pipe(outStream);
};

methods.MKCOL = function (path, respond) {
    fs.stat(path, function (error, stats) {
        // When no file with such name is found, creating a directory
        if (error && error.code === 'ENOENT') {
            fs.mkdir(path, respondErrorOrNothing(respond));
        } else if (error) {
            respond(500, error.toString());
            // Directory with such name already exists
        } else if (stats.isDirectory()) {
            respond(204);
            // File with such name already exists
        } else { respond(400); }
    });
};
