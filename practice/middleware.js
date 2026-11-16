const express = require("express");
const fs = require("fs");
const app = express();
const users = require('./MOCK_DATA.json');
const PORT = 4000;

app.use(express.urlencoded({extended:false}))

app.get('/api/users/',(req,res) => {
    return res.json(users)
})

app.get('/api/users/:id',(req,res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user)


})
app.post('/api/users/:id',(req,res) => {
    const body = req.body;
    user.push({...body,id:users.length+1,})
    fs.write('./MOCK_DATA.json',JSON.stringify(users),(err,data) => {
        return res.json ({status:"success",is:users.length+1})
    })
})


app.listen(PORT,()=>console.log(`server is started at port ${PORT}`))