let http = require("http");

let server = http.createServer(function(req, res){
    res.end("hello world!");
});

server.listen(6060);

console.log("This server is running on 6060");