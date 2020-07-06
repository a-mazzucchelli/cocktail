const express = require("express");
const path = require("path")
const app = express();
const port = 3000;

app.get('/',(req, res) =>{
  res.redirect ("/home")
})

app.get('/home',(req, res) =>{
  res.sendFile (path.join(__dirname, "/home.html"))
})

app.get('/random',(req, res) =>{
  res.sendFile (path.join(__dirname, "/random.html"))
})

app.get('*',(req, res) =>{
  res.sendFile (path.join(__dirname, "/404.html"))
})

app.listen(port,() => console.log(`ascolta porta ${port}`));