import { images } from "./Images";

export const ImageService = {
  getPreviewImages,
  WarmUp,
  getImages
};

function WarmUp() {
  if (!localStorage.getItem('images'))
    localStorage.setItem("images", JSON.stringify(images));
}


function getPreviewImages(placeID) {

  let randomizedDishes = getImagesLocalStorage();
  let randomizedImages = images;
  shuffle(randomizedImages);
  randomizedImages.slice(0, 10);
  return randomizedImages;
}

function getImages(placeId) {
  return getImagesLocalStorage();
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
