//const fs = require("fs")

//sync ...blocking reguest
//fs.writeFileSync('./test.txt','hey there');

//Async ...nonblocking reguest

//fs.writeFile("./test.txt","hello world Async",(err) => ())

//const result = fs.readFileSync("./contacts.txt","utf-8")
//console.log(result);
//fs.appendFileSync("./test.txt",`${Date.now()} Hey There\n`);
//console.log(fs.statfsSync("./test.txt"));
//fs.mkdirSync("my-doc");

const fs = require("fs")

//console.log("1")
//Blocking
//const result = fs.readFileSync('contacts.txt',"utf-8");
//console.log(result)

//console.log("2");


//non blocking 
console.log("1")
fs.readFile("contacts.txt","utf-8",(err,result) => {
    console.log(result)
});
console.log("2")