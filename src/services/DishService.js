import { dishes } from "./Dishes";

export const DishService = {
  getDishes
};

function getDishes(placeId) {
  let randomizedDishes = dishes;
  shuffle(randomizedDishes);
  randomizedDishes.slice(0, 3);
  return randomizedDishes;
}
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
