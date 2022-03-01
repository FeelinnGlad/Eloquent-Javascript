import fs from 'fs';

var methods = Object.create(null);

function respondErrorOrNothing(respond) {
    return function (error) {
        if (error) {
            respond(500, error.toString());
        } else { respond(204); }
    };
}

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
