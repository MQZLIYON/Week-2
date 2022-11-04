var http = require('http');

var server = http.createServer(function (request, response) {
    if (request.url == '/'){
        response.writeHead(200,{'Content':'text/html'});
        response.write('<h1>This is home Page</h1>');
        response.end();
    }
    else if (request.url == '/about'){
        response.writeHead(200,{'Content':'text/html'});
        response.write('<h1>This is about page</h1>');
        response.end();
    }
    else if (request.url == '/contact'){
        response.writeHead(200,{'Content':'text/html'});
        response.write('<h1>This is contact</h1>');
        response.end();
    }
});

server.listen(5050);
console.log("Server run success");
