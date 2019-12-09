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
  const map = useRef(null);
  const mapOptions = {
    styles: mapStyles // straight out of something like snazzymaps
  };

  let animateToLocation = x => {
    if (defaultCenter !== x.location) setDefaultCenter(x.location);
  };

  return (
    <S.Map>
      <GoogleMapReact
        ref={map}
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
              // key={x.name + x.geometry.location.lat + x.geometry.location.lng}
              key={x.id}
              // lat={x.geometry.location.lat}
              // lng={x.geometry.location.lng}
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
