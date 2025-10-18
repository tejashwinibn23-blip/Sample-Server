const http=require("node:http");
const server =http.createServer((req,res)=>{
    if(req.url="/champ"){
        res.end("hello teju")
    }
    res.end("hello champ")
})
server.listen(3000);