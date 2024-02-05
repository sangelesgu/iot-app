import React from 'react';

import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

import marker from '../../img/marker.svg';
const libraries = ['places'];
export const Map = () => {
  const apiKey = 'AIzaSyBdROc9bnZxmi4YtEneiCdk8ar51S-DMZk';
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries,
  });
  const centers = [];
  const ubication = null;
  const mapCenter = { lat: 19.4326, lng: -99.1332 };
  const options = {
    disableDefaultUI: true,
  };
  const onMapLoad = (map) => {
    console.log('map', map);
  };

  const handleClick = (center) => {
    console.log(center);
  };
  return (
    <div>
      <GoogleMap
        zoom={8}
        center={ubication === null ? mapCenter : ubication}
        options={options}
        onLoad={onMapLoad}
      >
        {centers &&
          centers?.map((center) => (
            <Marker
              onClick={() => handleClick(center)}
              key={center.id}
              position={{
                lat: +center.latitude?.replace(/,/g, '.'),
                lng: +center.longitude?.replace(/,/g, '.'),
              }}
              icon={{
                url: marker,
              }}
            />
          ))}
      </GoogleMap>
    </div>
  );
};
