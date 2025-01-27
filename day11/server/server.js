const http=require('http');

const server=http.createServer((req,res)=>
 res.end("server is running")
);
const port=3000;
server.listen(port);