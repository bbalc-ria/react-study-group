import React from "react";
import GoogleMapReact from "google-map-react";
import * as S from "./SearchPageStyle";
import { API_KEY } from "../Sensitive";
import Marker from "./Marker";



export default function SimpleMap(props) {
  console.log("Assdf")

  return (
    <S.Map>

      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={{ lat: props.coords.latitude, lng: props.coords.longitude }}
        defaultZoom={14}
      >
        {props.locations.map(x => (
          <Marker
            key={x.name}
            lat={x.geometry.location.lat}
            lng={x.geometry.location.lng}
            label={x.name}
            selected={x.selected}
          ></Marker>))}
        <Marker
          lat={props.coords.latitude}
          lng={props.coords.longitude}
          label={"YOU ARE HERE!"}
          home={true}
        ></Marker>
      </GoogleMapReact>

    </S.Map >

  );
}

