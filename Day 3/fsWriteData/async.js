var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req,res) {
    if (req.url == '/'){
        fs.writeFile('demo.txt','Hey!!!!!!!!!! I am Liyon',function (error) {
            if (error){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("Error");
                res.end();
            }
            else {
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("Success");
                res.end();
            }
        });

    }
});

server.listen(5050);

console.log("Server run success");