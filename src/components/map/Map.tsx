import React from 'react';

import { Loader } from '../ui/Loader';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

import { Device } from '../../helpers/response.types';

import marker from '../../img/marker.svg';

const libraries = ['places'];

interface MapProps {
  devices: Device[];
}

export const Map: React.FC<MapProps> = ({ devices }) => {
  const apiKey = 'AIzaSyBdROc9bnZxmi4YtEneiCdk8ar51S-DMZk';
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries: libraries as any,
  });

  const mapCenter = {
    lat: 41.385063,
    lng: 2.173404,
  };
  const options = {
    disableDefaultUI: true,
  };
  const onMapLoad = (map: any) => {
    console.log('map', map);
  };

  const handleClick = (device: Device) => {
    console.log(device);
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded)
    return (
      <div className="d-flex align-items-center justify-content-center pt-5">
        <Loader />
      </div>
    );

  return (
    <div>
      <GoogleMap
        zoom={8}
        center={mapCenter}
        options={options}
        onLoad={onMapLoad}
      >
        {devices &&
          devices?.map((device) => (
            <Marker
              onClick={() => handleClick(device)}
              key={device.id}
              position={{
                lat: +device.latitude,
                lng: +device.longitude,
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
