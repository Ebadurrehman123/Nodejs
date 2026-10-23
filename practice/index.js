/*
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
otherserver.listen(4000,() =>("server started"))

*/


const express = require("express")
const users = require("./MOCK_DATA.json")
const app = express()

const port=4000;

app.get("/user",(req,res) => {
    return res.json(users)

});

app.get("/api/users",(req,res)=>{
    const html = `
    <ul>
    ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html)
})

app.listen(port,()=>console.log("server is started"))


