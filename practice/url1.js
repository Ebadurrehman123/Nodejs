const http=require("http");
const fs = require("fs");
const url = require("url");

const myserver=http.createServer((req,res)=>{
    file = `${Date.now()}:${req.url}:request recieved\n`;
    fs.appendFile("file1.txt",file,(err,data)=>{
        switch(req.url){
            case "/":
                res.end("Homepage");
                break
            case "/about":
                res.end("this is my portfolio")
                break
            case "/contact":
                res.end("this is our contact")
                break
                default:
                    res.end("error")
        }
    })
})


myserver.listen(4000,console.log("server is started"))
