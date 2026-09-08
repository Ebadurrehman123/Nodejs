const http = require("http")



const myServer = http.createServer((req,res) => {
    console.log(res)
        res.end("hello from server again")
    });
   //console.log("New req rec.");
    //console.log("req.headers")
    //res.end("hello from Server")
myServer.listen(8000, () => console.log("Server started"))