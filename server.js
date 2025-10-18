const http=require("node:http");
const server =http.createServer((req,res)=>{
    res.end("hello champ")
})
server.listen(3000);