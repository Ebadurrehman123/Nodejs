const fs = require("fs")

//sync ...
//fs.writeFileSync('./test.txt','hey there');

//Async

//fs.writeFile("./test.txt","hello world Async",(err) => ())

const result = fs.readFileSync("./contacts.txt","utf-8");
console.log(result)