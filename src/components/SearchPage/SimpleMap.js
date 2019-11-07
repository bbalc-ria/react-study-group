import React from "react";
import GoogleMapReact from "google-map-react";
import * as S from "./SearchPageStyle";
import { API_KEY } from "../Sensitive";
import Marker from "./Marker";
import { mapStyles } from "./MapStyle";



export default function SimpleMap(props) {
  console.log("Assdf")
  const mapOptions = {
    styles: mapStyles // straight out of something like snazzymaps
};

  return (
    <S.Map>

      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY,v: '3.31' }}
        defaultCenter={{ lat: props.coords.latitude, lng: props.coords.longitude }}
        defaultZoom={14}
        options={mapOptions}
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

