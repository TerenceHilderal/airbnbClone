import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { useState } from 'react';
import { getCenter } from 'geolib';

const Map = ({ searchResults }) => {
	const [selectedLocation, setSelectedLocation] = useState({});
	// transform an object into an other like this{ latitude: 51.5103, longitude: 7.49347 },
	const coordinates = searchResults.map(({ lat, long }) => ({
		latitude: lat,
		longitude: long,
	}));
	console.log(selectedLocation);
	const center = getCenter(coordinates);
	const [viewport, setViewport] = useState({
		width: '100%',
		height: '100%',
		latitude: center.latitude,
		longitude: center.longitude,
		zoom: 11,
	});

	return (
		<ReactMapGL
			mapStyle='mapbox://styles/terencehdl/cktk1y5dt7p9x17p9dpdtsjqr'
			mapboxApiAccessToken={process.env.mapbox_key}
			{...viewport}
			onViewportChange={(nextViewport) => setViewport(nextViewport)}
		>
			{searchResults.map((result) => (
				<div key={result.long}>
					<Marker
						longitude={result.long}
						latitude={result.lat}
						offsetLeft={-20}
						offsetTop={-10}
					>
						<p
							className='cursor-pointer text-2xl animate-bounce'
							onClick={() => setSelectedLocation(result)}
							aria-label='push-pin'
						>
							📍
						</p>
					</Marker>

					{selectedLocation.long === result.long ? (
						<Popup
							onClose={() => setSelectedLocation({})}
							closeOnClick={true}
							latitude={result.lat}
							longitude={result.long}
						>
							{result.title}
						</Popup>
					) : (
						false
					)}
				</div>
			))}
		</ReactMapGL>
	);
};

export default Map;
