import { reviews } from "./Reviews";
import { UserService } from "./UserService";

export const ReviewService = {
  getReviewsForPlace
};

function getReviewsForPlace(placeId) {
  let review = reviews.filter(x => x.place === placeId);
  review.user = UserService.getUser(review.user);
  return review;
}
