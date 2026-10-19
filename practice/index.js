const http = require('http');
const fs = require('fs');

const otherserver = http.createServer((req,res) => {
    const log=`${Date.now()}:${req.url}new request recived\n`;
    fs.appendFile("log.txt",log,(err,data) => {
        switch(req.url){
            case "/":
                res.end("Homepage");
                break
                case "/about":
                    res.end("i am a developer")
                    break
                case "/contact":
                    res.end("contact me")
                    break
                case "/profile":
                    res.end("my profile")
                    break
                default:
                    res.end("404 not found")
        }
    })
})
otherserver.listen(4000,() => console.log("server started on port 4000"))
