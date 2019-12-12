import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import * as S from "./SearchPageStyle";
import { API_KEY } from "../Sensitive";
import Marker from "./Marker";
import { useRef } from "react";
import { mapStyles } from "./MapStyle";

export default function SimpleMap(props) {
  const [defaultCenter, setDefaultCenter] = useState({
    lat: props.coords.latitude,
    lng: props.coords.longitude
  });
  console.log("Assdf");
  const mapOptions = {
    styles: mapStyles
  };

  let animateToLocation = x => {
    if (defaultCenter !== x.location) setDefaultCenter(x.location);
  };

  return (
    <S.Map>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY, v: "3.38" }}
        center={defaultCenter}
        defaultZoom={14}
        options={mapOptions}
      >
        {props.locations.map(x => {
          if (x.selected === true) {
            animateToLocation(x);
          }
          return (
            <Marker
              key={x.id}
              lat={x.location.lat}
              lng={x.location.lng}
              label={x.name}
              selected={x.selected}
            ></Marker>
          );
        })}
        <Marker
          lat={props.coords.latitude}
          lng={props.coords.longitude}
          label={"YOU ARE HERE!"}
          home={true}
        ></Marker>
      </GoogleMapReact>
    </S.Map>
  );
}
