import { images } from "./Images";

export const ImageService = {
  getPreviewImages,
  WarmUp,
  getImages,
  getImagesReview,
  getImagesReviewObject
};

function WarmUp() {
  if (!localStorage.getItem("images"))
    localStorage.setItem("images", JSON.stringify(images));
}

function getPreviewImages(placeID) {
  let randomizedImages = getImagesLocalStorage();
  shuffle(randomizedImages);
  randomizedImages.slice(0, 10);
  return randomizedImages;
}
function getImagesLocalStorage() {
  return JSON.parse(localStorage.getItem("images"));
}

function getImages(placeId) {
  return getImagesLocalStorage().map(x => x.src);
}
function getImagesReview(imagesIds) {
  let x = [];
  let imgs = getImagesLocalStorage();
  debugger;
  imagesIds &&
    imagesIds.forEach(element => {
      x.push(imgs.filter(img => img.id === element)[0].src);
    });
  debugger;
  return x;
}

function getImagesReviewObject(imagesIds) {
  let x = [];
  let imgs = getImagesLocalStorage();
  imagesIds &&
    imagesIds.forEach(element => {
      x.push(imgs.filter(img => img.id === element)[0]);
    });
  return x;
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
