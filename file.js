const fs = require("fs")

//sync ...
//fs.writeFileSync('./test.txt','hey there');

//Async

//fs.writeFile("./test.txt","hello world Async",(err) => ())

const result = fs.readFileSync("./contacts.txt","utf-8")
console.log(result);
//fs.appendFileSync("./test.txt",`${Date.now()} Hey There\n`);
console.log(fs.statfsSync("./test.txt"));
fs.mkdirSync("my-doc");