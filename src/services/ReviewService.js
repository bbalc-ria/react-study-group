import { reviews } from "./Reviews";
import { UserService } from "./UserService";

export const ReviewService = {
  getReviewsForPlace,
  WarmUp,
  Delete,
  Add
};

function WarmUp() {
  if (!localStorage.getItem('reviews'))
    localStorage.setItem("reviews", JSON.stringify(reviews));
}


function getReviewsForPlace(placeId) {

  let reviews = getReviewsLocalStorage().filter(x => x.place !== placeId);
  reviews.map(x => x.user = UserService.getUser(x.userId));
  console.log("reviewISend", reviews);
  return reviews;
}

function Add(review) {
  let reviews = getReviewsLocalStorage();
  reviews = [...reviews, { ...review, id: GetId() }]
  localStorage.setItem("reviews", JSON.stringify(reviews));
  return true;
}

function GetId() {
  let reviews = getReviewsLocalStorage();
  let id = reviews[reviews.length - 1].id
  while (true) {
    if (reviews.filter(x => x.id == id))
      id++;
    else {
      return id;
    }
  }
}

function Delete(id) {
  let reviews = getReviewsLocalStorage().filter(x => x.id !== id);
  localStorage.setItem("reviews", JSON.stringify(reviews));
  return true;
}


let getReviewsLocalStorage = () => {
  return JSON.parse(localStorage.getItem("reviews"))
}

