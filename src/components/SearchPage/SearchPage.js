import React, { useState, useEffect } from "react";
import * as S from './SearchPageStyle';
import SimpleMap from './SimpleMap';
import SimpleList from "./SimpleList";
import { MapService } from "../services/MapsService";
export default function SearchPage() {

  const [coords, setCoords] = useState("")
  const [locations, setLocations] = useState("");
  const [nextLink, setNextLink] = useState("")


  useEffect(() => {

    debugger;
    location();

  }, []);
  let radius = 2000;



  // let getData = (page) => {
  //   debugger;
  //   if (page < 3) {
  //     MapService.RequestRestaurants(coords.latitude, coords.longitude, radius, nextLink
  //     ).then(x => {
  //       if (x) {
  //         setNextLink(x.next_page_token);
  //         setLocations([...locations, ...x.results]);
  //       }
  //       else { setNextLink(undefined) }

  //     }).then(console.log("Received data"))
  //   }
  //   else setNextLink(undefined);

  // };
  let location = () => {
    console.log("locations")
    navigator.geolocation.getCurrentPosition(
      displayLocationInfo,
      x => console.log("ERREREER", x),
      { maximumAge: 150000, timeout: 1000000 }
    );

    function displayLocationInfo(position) {
      console.log("GET POS", position)
      debugger;
      setCoords(position.coords);
      MapService.RequestRestaurants(position.coords.latitude, position.coords.longitude, radius).then(x => {
        setLocations(x.results)
        if (x) {
          debugger;
          setNextLink(x.next_page_token);
        }
        else { setNextLink(undefined) }

      })
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
      {locations !== "" && <SimpleList hasMore={nextLink} locations={locations} select={select} deselect={deselect}></SimpleList>}
      {locations !== "" && <SimpleMap coords={coords} locations={locations}></SimpleMap>}
    </S.Container >

  )

}

