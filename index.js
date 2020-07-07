const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.redirect('/home');
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/random', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/random.html'));
});

app.get('/cocktail/:idCocktail', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/cocktail.html'));
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/404.html'));
});

app.listen(port, () => console.log(`App listening on port ${port}`));
