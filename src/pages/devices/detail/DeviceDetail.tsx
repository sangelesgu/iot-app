import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Device } from '../../../helpers/response.types';
import { Loader } from '../../../components/ui/Loader';
import './styles.css';

const url = process.env.REACT_APP_API_BASE_URL;

export const DeviceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [device, setDevice] = useState<Device>({} as Device);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${url}/api/devices/1`).then((res) => {
      res
        .json()
        .then((data) => {
          setDevice(data.data);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          setDevice({} as Device);
          console.error('Error fetching devices:', error);
        });
    });
  }, [id]);

  if (isLoading) {
    return (
      <div className="d-flex align-items-center justify-content-center pt-5">
        <Loader />
      </div>
    );
  }

  return (
    <div className="device-detail-main pt-5">
      <section className="card text-center">
        <div className="card-header">
          <h5 className="card-title">Device Details</h5>
        </div>
        <div className="card-body">
          <p className="card-text">Name: {device.name}</p>
          <p className="card-text">ID: {device.id}</p>
          <p className="card-text">Number: {device.mobileNumber}</p>
        </div>
      </section>
    </div>
  );
};
