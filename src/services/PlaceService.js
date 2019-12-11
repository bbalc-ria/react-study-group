import { Places } from "./Places";

export const PlaceService = {
  getPlaces,
  getPlace,
  WarmUp
};

function WarmUp() {
  if (!localStorage.getItem('places'))
    localStorage.setItem("places", JSON.stringify(Places));
}


function getPlaces() {
  return getPlacesLocalStorage();
}



function getPlace(id) {
  return Places.filter(x => x.id == id)[0];
}



let getPlacesLocalStorage = () => {
  return JSON.parse(localStorage.getItem("places"))
}