import { Places } from "./Places";

export const PlaceService = {
  getPlaces,
  getPlace
};

function getPlaces() {
  return Places;
}

function getPlace(id) {
  return Places.filter(x => x.id === id)[0];
}
