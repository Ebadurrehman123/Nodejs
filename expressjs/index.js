const express =require("express")
const users = require('./MOCK_DATA.json');

const app = express();
const PORT = 8000;
//ROUTES
app.get('/api/users',(req,res) =>{
    return res.json(users)
});
app.get('/users',(req,res) =>{
   const html =`
   <ul>
    ${users.map((users) => `<li>${user.first_name}</li>`)}

   </ul>
   `;
   res.send(html);
})

app.listen(PORT,()=>console.log(`server stated at PORT:${PORT} `))