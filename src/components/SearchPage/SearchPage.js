import React, { useState, useEffect } from "react";
import * as S from './SearchPageStyle';
import SimpleMap from './SimpleMap';
import SimpleList from "./SimpleList";
import { MapService } from "../services/MapsService";
export default function SearchPage() {
  const [coords, setCoords] = useState("")
  const [locations, setLocations] = useState("");

  useEffect(() => {
    if (coords === "") {
      location();
    }
    if (coords && locations === "")
      MapService.RequestRestaurants(coords.latitude, coords.longitude, 20000).then(x => setLocations(x));

  });

  let location = () => {
    console.log("locations")
    navigator.geolocation.getCurrentPosition(
      displayLocationInfo,
      x => console.log("ERREREER", x),
      { maximumAge: 150000, timeout: 1000000 }
    );

    function displayLocationInfo(position) {
      console.log("GET POS", position)
      setCoords(position.coords);
      console.log(coords)
    }
  };

  const select = index => {
    let modified = { ...locations[index], selected: true };
    console.log("MODIFIED", modified);
    let auxlocations = locations;
    auxlocations[index] = modified;
    setLocations([...auxlocations]);
    console.log(locations[index]);
    console.log("selected", index);
  };
  const deselect = index => {
    let modified = { ...locations[index], selected: false };
    let auxlocations = locations;
    auxlocations[index] = modified;
    setLocations([...auxlocations]);
    console.log("deselected", index);
  };

  return (
    <S.Container>
      {locations && <SimpleList locations={locations} select={select} deselect={deselect}></SimpleList>}
      {locations && <SimpleMap coords={coords} locations={locations}></SimpleMap>}
    </S.Container >

  )

}
