var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    fs.writeFile('demo.txt','Hello World',function (error) {
        if (error){
            res.writeHead(200,{'Content-Type':'txt/html'});
            res.write('<h1>Error</h1>')
            res.end();
        }
        else {
            res.writeHead(200,{'Content-Type':'txt/html'});
            res.write('<h1>Success</h1>')
            res.end();
        }
    })
});
server.listen(5050);
console.log("Server run success");