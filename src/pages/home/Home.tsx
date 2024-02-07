import React, { useEffect, useState } from 'react';
import { Map } from '../../components/map/Map';

import './styles.css';
import { Device } from '../../helpers/response.types';
const url = process.env.REACT_APP_API_BASE_URL;
console.log(url);
export const Home = () => {
  const [devices, setDevices] = useState([] as Device[]);

  useEffect(() => {
    fetch(`${url}/api/devices/?perPage=10`).then((res) => {
      res
        .json()
        .then((data) => {
          setDevices(data.data);
        })
        .catch((error) => {
          setDevices([]);
          console.error('Error fetching devices:', error);
        });
    });
  }, []);
  return (
    <div className="home-main">
      <section className="main-title">
        <span>Home</span>
      </section>
      <section className="card">
        <Map devices={devices} />
      </section>
    </div>
  );
};
