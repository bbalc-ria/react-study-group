import React, { useState, useEffect } from "react";
import * as S from "./SearchPageStyle";
import SimpleMap from "./SimpleMap";
import SimpleList from "./SimpleList";
import { MapService } from "../services/MapsService";
import { PlaceService } from "../../services/PlaceService";
import { makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

export default function SearchPage() {
  const [coords, setCoords] = useState("");
  const [locations, setLocations] = useState("");
  const [nextLink, setNextLink] = useState("");
  const [searchText, setsearchText] = useState();
  const classes = useStyles();

  useEffect(() => {
    location();
  }, []);
  let radius = 2000;

  let location = () => {
    console.log("locations");
    navigator.geolocation.getCurrentPosition(
      displayLocationInfo,
      x => console.log("ERREREER", x),
      { maximumAge: 150000, timeout: 1000000 }
    );

    function displayLocationInfo(position) {
      console.log("GET POS", position);
      setCoords(position.coords);
      setLocations(PlaceService.getPlaces);
      // MapService.RequestRestaurants(
      //   position.coords.latitude,
      //   position.coords.longitude,
      //   radius
      // ).then(x => {
      //   setLocations(x.results);
      //   if (x) {
      //     setNextLink(x.next_page_token);
      //   } else {
      //     setNextLink(undefined);
      //   }
      // });
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
      {locations !== "" && (
        <SimpleList
          hasMore={nextLink}
          locations={locations}
          select={select}
          deselect={deselect}
        ></SimpleList>
      )}
      {locations !== "" && (
        <SimpleMap coords={coords} locations={locations}></SimpleMap>
      )}
    </S.Container>
  );
}
