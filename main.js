
//const http = require('node:http');
/*


const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req,res) => {
    res.statuscode = 200;
    res.setHeader('content-type','text/plan');
    res.end('<h1> Hello world</h1> ');

});
server.listen(port,hostname,() => {
    console.log(`server running at http://${hostname}:${port}/`);
});
*/
//import {a} from './myModule.js'
//console.log(a)
//const a = require("./myModule.js")
//console.log(a)

const fs = require("fs")

console.log(fs)
console.log("starting")

//fs.writeFileSync("ebad.txt"," ia.>....")

fs.writeFile("harry2.txt","ebad is a good boy",()=>{
    console.log("done")
})
console.log("ending")