import fs from "fs/promises"

let a = await fs.readFile("./codeharry/harry2.txt")

let b = await fs.writeFile("./codeharry/harry2.txt","\n\n\nthis is amazing promise")
console.log(a.toString(),b)