const http = require('http');
const fs = require('fs');

const myserver = http.createServer((req,res) => {
    const log=`${Date.now()}:${req.url}new request recived\n`;
    fs.appendFile("log.txt",log,(err,data) => {
        switch(req.url){
            case "/":
                res.end("Homepage");
                break
                case "/about":
                    res.end("i am a developer")
        }
    })
})