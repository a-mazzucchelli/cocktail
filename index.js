const express = require("express");
const path = require("path")
const app = express();

const port = 3000;

app.get('/random',(req, res) =>{
  res.sendFile (path.join(__dirname, "/random.html"))
})

app.get('*',(req, res) =>{
  res.send('404 not found')
})

app.listen(port,() => console.log(`ascolta porta ${port}`));