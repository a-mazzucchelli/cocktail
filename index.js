const express = require('express');
const path = require('path');
// const axios = require('axios');
// const { response } = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.redirect('/home');
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/random', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/random.html'));
});

app.get('/cocktail', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/cocktail.html'));
});

app.get('/favourites', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/favourites.html'));
});

// app.get('/api/searchByIngredients', (req, res) => {
//   const result = { drinks: [] };

//   const ingredient = req.query.ingredient;

//   axios
//     .get(
//       `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
//     )
//     .then((response) => {
//       const drinksByIngredient = response.data.drinks;
//       let responseCount = 0;
//       drinksByIngredient.forEach((drink) => {
//         result.drinks.push(drink.strDrink);
//         responseCount++;

//         if (responseCount === drinksByIngredient.length) {
//           res.json(result);
//         }
//       });
//     });

// const ingrArray = req.query.ingredients.split(',');
// console.log(ingrArray);

// ingrArray.forEach(ingredient => {
//   call to https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=ingredient
// })
// });

app.post('api/drinksWithRatings', (req, res) => {});

app.get('api/drinksWithRatings', (req, res) => {});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/404.html'));
});

app.listen(port, () => console.log(`App listening on port ${port}`));
