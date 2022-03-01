function contentNegotiation() {
    // Types to be requested
    ['text/plain', 'text/html', 'application/json'].forEach(function (type) {
        var http = require('http');
        // Request object parameters
        var request = http.request({
            hostname: 'eloquentjavascript.net',
            path: '/author',
            method: 'GET',
            headers: { Accept: type }
        }, function (response) {
            // Writing out the content of the responses to each request.
            console.log('Server responded with status code:',
                response.statusCode, '(' + response.statusMessage + ')' +
                '\nData type requested:', type,
                '\nData type received:', response.headers['content-type']);
            readStreamAsString(response, function (error, data) {
                if (!error) {
                    console.log('Data received:\n', data);
                } else { console.log('The following error raised:', error); }
            });
        });
        request.end();
    });
    // Utility function that reads a whole stream and calls
    // a callback function with the result
    function readStreamAsString(stream, callback) {
        var data = '';
        stream.on('data', function (chunk) {
            data += chunk.toString();
        });
        stream.on('end', function () {
            callback(null, data);
        });
        stream.on('error', function (error) {
            callback(error);
        });
    }
}

contentNegotiation();
