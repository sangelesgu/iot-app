import React, { useRef } from 'react';

import { Loader } from '../ui/Loader';
import { Marker, useLoadScript } from '@react-google-maps/api';
import GoogleMapReact from 'google-map-react';

import { Device } from '../../helpers/response.types';

import marker from '../../img/marker.svg';

const libraries = ['places'];

interface MapProps {
  devices: Device[];
}

export const Map: React.FC<MapProps> = ({ devices }) => {
  const apiKey = 'AIzaSyBdROc9bnZxmi4YtEneiCdk8ar51S-DMZk';
  const mapRef = useRef(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries: libraries as any,
  });

  const Marker = ({ text }: { text: string; lat: number; lng: number }) => (
    <>
      <img src={marker} alt="marker" />
      {text}
    </>
  );

  const mapCenter = {
    lat: 41.385063,
    lng: 2.173404,
  };
  const options = {
    disableDefaultUI: true,
  };

  /*  const handleClick = (device: Device) => {
    console.log(device);
  };
 */
  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded)
    return (
      <div className="d-flex align-items-center justify-content-center pt-5">
        <Loader />
      </div>
    );

  return (
    <div className="d-flex justify-content-center map-container">
      <GoogleMapReact defaultZoom={5} center={mapCenter} options={options}>
        {devices &&
          devices.length > 0 &&
          devices?.map((device) => (
            <Marker
              // onClick={() => handleClick(device)}
              key={device.id}
              lat={device.latitude} // Fix: Change 'lat' to 'latitude'
              lng={device.longitude} // Fix: Change 'lng' to 'longitude'
              text={device.name}
            />
          ))}
      </GoogleMapReact>
    </div>
  );
};
