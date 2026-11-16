const express =require("express") //Express framework import kar rahe hain. Iski help se hum server aur routes create karte hain.
const users = require('./MOCK_DATA.json');
const fs = require("fs");//FS ka matlab File System.Iska kaam files ko read, write, update aur delete karna hai.
const app = express(); //Express application create ho rahi hai.
const PORT = 8000;

//middleware -plugin Middleware request aur response ke darmiyan kaam karta hai.
//jab bhi kai form data ai ga us ko meri body ma daal nay ka kaam krai ga
app.use(express.urlencoded({extended:false})) //app.use() middleware register karta hai,  express.urlencoded() form data parse karta hai. extended: false simple URL-encoded data parsing use karta hai.
//ROUTES
app.get('/api/users',(req,res) =>{
    return res.json(users)
});
app.get("/api/users/:id",(req,res) => { //:id URL ka dynamic parameter hai.
    const id = Number(req.params.id); //Isko number mein convert karte hain. Kyunke URL parameters normally strings hote hain
    const user = users.find((user) => user.id === id);
    return res.json(user);
});

app.route("/api/users/:id") //ska matlab hai ke hum ek specific URL ka route define kar rahe hain.
  .get((req,res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id ===id);
    return res.json(user);
  })
.patch((req,res) => {
    return res.json({status:"pending"});
})
.delete((req,res) => {
    return res.json({status:"pending"});
})
app.post("/api/users",(req,res) => {
    //create new user
    const body = req.body;
    users.push({...body,id:users.length + 1}); //Ye line new user ko users array mein add karti hai. users.push() array mein new element add karta hai.//...body body ke saare properties copy karta hai. id: users.length + 1 new ID assign karta hai.
    fs.writeFile('./Mock_Data.json',JSON.stringify(users),(err,data) => {  //Yahan data JSON file mein save ho raha hai. JSON.stringify(users) JavaScript array ko JSON string mein convert karta hai.
        return res.json({status:"success",id:users.length+1});
    });
    
})


app.listen(PORT,()=>console.log(`server stated at PORT:${PORT} `))