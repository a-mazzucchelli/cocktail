const addToFavourites = (drinkId) => {
  const favourites = getFavourites();
  favourites.push(drinkId);
  Cookies.set('favourites', favourites.join(','));
};

const getFavourites = () => {
  const favouritesCookie = Cookies.get('favourites');
  return favouritesCookie ? favouritesCookie.split(',') : [];
};

// given an array of drink objects, and a table html element, render array contents in the table
const renderFavourites = (favArray, table) => {
  favArray.forEach((favorite, index) => {
    const row = table.insertRow();
    row.insertCell(0).innerHTML = index + 1;
    row.insertCell(
      1
    ).innerHTML = `<a href="/cocktail?drinkId=${favorite.idDrink}">${favorite.strDrink}</a>`;
    row.insertCell(2).innerHTML = favorite.strCategory;
    row.insertCell(3).innerHTML = favorite.strGlass;
  });
};
