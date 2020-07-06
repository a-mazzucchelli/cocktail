const express = require("express");
const app = express();
const port = 3000;

app.get('*',(req, res) =>{
  res.send('ciao funziona')
})



app.listen(port,() => console.log(`ascolta porta ${port}`));