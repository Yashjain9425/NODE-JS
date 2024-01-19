const http = require('http');
const fs = require('fs');
const FileContent = fs.readFileSync('hello.txt');
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end(FileContent);
})
server.listen(80,'127.0.0.3',()=>{
    console.log('listening on port 80');
})