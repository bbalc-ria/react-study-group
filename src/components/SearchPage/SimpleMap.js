import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";

import * as S from "./SearchPageStyle";
import { MapService } from "../services/MapsService";
import { API_KEY } from "../Sensitive";


const Marker = ({ text }) => <div>{text}</div>;

export function SimpleMap(props) {
	const [lat, setLat] = useState();
	const [lng, setLng] = useState();
	const [locations, setLocations] = useState("");
	const [markers, setMarkers] = useState("");



	useEffect(() => {
		if (!lat) {
			location();
		}
		if (lat && lng && locations === "")
			MapService.RequestRestaurants(lat, lng, 20000).then(x => setLocations(x));
		else {
			if (markers === "")

				setMarkers(locations && locations.map(x => (
					<Marker
						key={x.name}
						position={x.geometry.location}
						label={x.name}
						icon={
							x.selected === true
								? {
									url:
										"http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
								}
								: ""
						}
					></Marker>
				)))
		}


	});
	let location = () => {
		navigator.geolocation.getCurrentPosition(
			displayLocationInfo,
			x => console.log("ERREREER", x),
			{ maximumAge: 150000, timeout: 1000000 }
		);

		function displayLocationInfo(position) {
			console.log("GET POS", position)
			setLng(position.coords.longitude);
			setLat(position.coords.latitude);

		}
	};

	const handleApiLoaded = (map, maps) => {
		// use map and maps objects
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
			<S.List>
				{locations && locations.map((x, index) => (
					<S.ListItem
						key={x.name}
						onMouseEnter={() => select(index)}
						onMouseLeave={() => deselect(index)}
					>
						{x.name}
					</S.ListItem>
				))}
			</S.List>
			<div style={{ height: '100vh', width: '100%' }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: API_KEY }}
					defaultCenter={{
						lat: lat,
						lng: lng
					}}
					defaultZoom={11}
					yesIWantToUseGoogleMapApiInternals

				>
					{markers}

				</GoogleMapReact>
			</div>
		</S.Container >
	);
}

