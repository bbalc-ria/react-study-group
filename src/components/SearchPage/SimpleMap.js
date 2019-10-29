import React, { useState } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import * as S from './SearchPageStyle';
const mapStyles = {


};

export function SimpleMap(props) {
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);


    let location = () => {
        navigator.geolocation.getCurrentPosition(
            displayLocationInfo,
            console.log("ERROR"),
            { maximumAge: 150000, timeout: 0 }
        );

        function displayLocationInfo(position) {
            setLng(position.coords.longitude);
            setLat(position.coords.latitude);

            console.log(`longitude: ${lng} | latitude: ${lat}`);
        }
    }
    location();
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

                />
            </S.Map>
        </S.Container>

    );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCHwfb_pK7Db7uzfyaVX9b9Shpcoxp7VK0'
})(SimpleMap);