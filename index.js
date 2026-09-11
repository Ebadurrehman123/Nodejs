require('dotenv').config()
const express = require('express')

const app = express()

const port = 4000

app.get('/',(req,res) => {
    res.send('hello world!')
})

app.get('/twitter',(req,res) => {
    res.send('ebadurrehmancom')
})
app.get('/login',(req,res) => {
    res.send('<h1>pls login </h1>')
})
app.get('/youtube',(req,res) => {
    res.send("<h2>code and debug</h2>")
})

app.listen(process.env.PORT,() => {
    console
    .log(`Example app listening on port ${port}`)
})
