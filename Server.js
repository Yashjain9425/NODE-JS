const http = require('http');

http.createServer((req,res)=>{
    res.writeHead("hello this is yash");
    res.end();
}).listen(4500);