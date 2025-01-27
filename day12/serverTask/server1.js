//importing express
const express=require('express');
//create a server
const server=express();
//assign a port number
const port=5000;
server.get('/',(req,res)=>{
res.end("server is running");
}
);
server.get('/user',(req,res)=>{
    res.end("this is user route")
})
server.listen(port,()=>
console.log(`server is running on http://localhost:${port}`)
);