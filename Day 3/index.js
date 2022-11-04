var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    if (req.url == '/'){
        // Asy
        // fs.readFile('home.html',function (error, data) {
        //     res.writeHead(200,{'Content-Type':'text/html'});
        //     res.write(data);
        //     res.end();
        //
        // }
        // Asy

        // Sync
        let myData = fs.readFileSync('home.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(myData);
        res.end();
    }
});
server.listen(5050);
console.log("Server run success");