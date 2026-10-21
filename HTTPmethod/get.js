//when you want to get some data from the server
//postrequest when you want to send and mutates some data in server or send data to the server
const http = require("http")
const fs = require("fs");
const url = require("url")

const myserver =http.createServer((req,res) =>{
    const myfile=`${Date.now()}:${req.url}:${req.method}:request recieved\n`
    const myurl = url.parse(req.url)
    console.log(myurl)
    fs.appendFile("log.txt",myfile,(err,data)=>{
        switch(req.url){
            case "/":
                res.end("Homepage") 
                break
            case "/about":
                res.end("getabout")
                break
        }
    })
})

myserver.listen(8000,console.log("server is started"))