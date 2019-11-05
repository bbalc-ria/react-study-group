import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import * as S from './SearchPageStyle';
import { MapService } from '../services/MapsService';
import { API_KEY } from '../Sensitive';
const mapStyles = {


};

export function SimpleMap(props) {
    const [lat, setLat] = useState();
    const [lng, setLng] = useState();



    useEffect(() => {
        location();
        if (lat && lng) MapService.RequestRestaurants(lat, lng, 20000);
    });
    let location = () => {
        navigator.geolocation.getCurrentPosition(
            displayLocationInfo,
            x => console.log(x),
            { maximumAge: 150000, timeout: 1000000 }
        );

        function displayLocationInfo(position) {
            setLng(position.coords.longitude);
            setLat(position.coords.latitude);

            console.log(`longitude: ${lng} | latitude: ${lat}`);
        }
    }


    return (
        <S.Container>
            <S.List>
                <S.ListItem>Test</S.ListItem>
                <S.ListItem>222</S.ListItem>
                <S.ListItem>3333</S.ListItem>
                <S.ListItem>4444</S.ListItem>
                <S.ListItem>6666</S.ListItem>
                <S.ListItem>6666</S.ListItem>
                <S.ListItem>6666</S.ListItem>
                <S.ListItem>6666</S.ListItem>
                <S.ListItem>6666</S.ListItem>
                <S.ListItem>6666</S.ListItem>
                <S.ListItem>6666</S.ListItem>
                <S.ListItem>6666</S.ListItem>
                <S.ListItem>6666</S.ListItem>
                <S.ListItem>6666</S.ListItem>


            </S.List>


            <S.Map>
                <Map
                    google={props.google}
                    zoom={14}
                    style={mapStyles}
                    center={{
                        lat: lat,
                        lng: lng
                    }}

                >
                    <Marker
                        icon={{
                            url: "https://saneenergyproject.files.wordpress.com/2014/03/map-pin.png?w=176&h=300",
                            anchor: new props.google.maps.Point(30, 60),
                            scaledSize: new props.google.maps.Size(30, 60)
                        }}

                        position={{ lat, lng }}
                        name={'Current location'} />
                </Map>
            </S.Map>
        </S.Container>

    );
}

export default GoogleApiWrapper({
    apiKey: API_KEY
})(SimpleMap);