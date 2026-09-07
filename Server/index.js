const http = require("http")

const myServer = http.createServer((req,res) => {
    console.log("New req rec.");
    res.end("hello from Server")
});

myServer.listen(8000, () => console.log("server started"))