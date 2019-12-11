import { DishService } from "./DishService"
import { ImageService } from "./ImageService";
import { PlaceService } from "./PlaceService";
import { UserService } from "./UserService";
import { ReviewService } from "./ReviewService";


export const GeneralService = {
  WarmUp
}

function WarmUp() {
  DishService.WarmUp();
  ImageService.WarmUp();
  PlaceService.WarmUp();
  ReviewService.WarmUp();
  UserService.WarmUp();

}