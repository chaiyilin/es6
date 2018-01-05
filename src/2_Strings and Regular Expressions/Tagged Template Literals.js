const logArgs = (...args) => console.log(...args);
const favoriteFood = "pizza";
const favoriteDrink = "fanta";
logArgs`I like ${favoriteFood}. and ${favoriteDrink}`;
