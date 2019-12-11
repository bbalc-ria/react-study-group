import { dishes } from "./Dishes";

export const DishService = {
  getDishes,
  WarmUp
};

function WarmUp() {
  if (!localStorage.getItem('dishes'))
    localStorage.setItem("dishes", JSON.stringify(dishes));
}

function getDishes(placeId) {
  let randomizedDishes = getDishesLocalStorage();
  shuffle(randomizedDishes);
  randomizedDishes.slice(0, 3);
  return randomizedDishes;
}

let getDishesLocalStorage = () => {
  return JSON.parse(localStorage.getItem("dishes"))
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
