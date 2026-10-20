const http = require("http");
const fs= require("fs");
const url = require("url");


const server=http.createServer((req,res) => {
    const file=`${Date.now}:${req.url} request recieved\n`;
    const myUrl = url.parse(req.url,true);
    console.log(myUrl);
    fs.appendFile("file1.txt",file,(err,data) => {
        switch(myUrl.pathname){
            case "/":
                res.end("Homepage")
            break
            case "/about":
                const username = myUrl.query.myname
                res.end(`Hi,${username}`);
            break
            case "/contact":
                res.end("contact")
            break
            case '/search':
                const search = myUrl.query.search_query;
                res.end("Here are your results for " +search);
                break
            default:
                res.end("404 not found")
        }
    })
})

server.listen(4000,()=>console.log("server is started"))