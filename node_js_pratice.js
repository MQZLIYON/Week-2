var http = require('http');

var server = http.createServer(function (request, response) {
    response.end("Hello World")
});

// set server port
server.listen(5050);

console.log("Server run success");  