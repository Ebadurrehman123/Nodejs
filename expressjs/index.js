const express =require("express")
const users = require('./MOCK_DATA.json');
const fs = require("fs");
const app = express();
const PORT = 8000;

//middleware -plugin
app.use(express.urlencoded({extended:false}))
//ROUTES
app.get('/api/users',(req,res) =>{
    return res.json(users)
});
app.get("/api/users/:id",(req,res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
});

app
  .route("/api/users/:id")
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
    users.push({...body,id:users.length + 1});
    fs.writeFile('./Mock_Data.json',JSON.stringify(users),(err,data) => {
        return res.json({status:"success",id:users.length+1});
    });
    
})


app.listen(PORT,()=>console.log(`server stated at PORT:${PORT} `))