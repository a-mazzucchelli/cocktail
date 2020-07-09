const favouritesSet = [...new Set(getFavourites())];

const favTable = document.querySelector('.table');

const favouritesData = [];
let responseCount = 0;
favouritesSet.forEach((drinkId, index) => {
  axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
    .then((response) => {
      const drink = response.data.drinks[0];

      favouritesData[index] = drink;
      responseCount++;

      if (responseCount === favouritesSet.length) {
        renderFavourites(favouritesData, favTable);
      }
    });
});
