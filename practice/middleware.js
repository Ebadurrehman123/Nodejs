const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const app = express();
const port = 4000;

app.use(express.urlencoded({extended:false}));

app.get("/test", (req, res) => {
    return res.send("Server is working!");
});

app.get('/api/users',(req,res) => {
    return res.json(users);
});
app.get('/api/users/:id',(req,res) => {
    const id = Number(req.params.id)
    const user = users.find((user) => user.id===id)
    return res.json(user)
})

console.log("File is running:", __filename);
console.log("Total users:", users.length);
console.log("Dynamic route registered");

app.listen(port,()=>console.log(`port is started :${port}`))