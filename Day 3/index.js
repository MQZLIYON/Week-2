var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    if (req.url == '/'){
        fs.readFile('home.html',function (error, data) {
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
        })
    }
});
server.listen(5050);
console.log("Server run success");