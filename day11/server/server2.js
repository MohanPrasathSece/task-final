


//importing express
const express=require('express');
//create a server
const server=express();
//assign a port number
const port=5004;
const items=[
    {
        id:1,name:'jeans'},
        {id:2,name:'shirts'},
        {id:3,name:'kurti'}];
server.use(express.json());
server.get('/',(req,res)=>{
res.end("server is running");
}
);
server.get('/product',(req,res)=>{
    res.json(items)
});

server.post('/product',(req,res)=>{
    newitem={id:items.length+1,name:req.body.name};
    items.push(newitem);
    res.status(201).json(newitem);
});
server.listen(port,()=>
console.log(`server is  running on http://localhost:${port}`)
);