import React, { useEffect, useState } from 'react';

import './styles.css';
import { Table } from '../../components/table/Table';
import { Device } from '../../helpers/response.types';
import { useNavigate } from 'react-router-dom';

const url = process.env.REACT_APP_API_BASE_URL;

export const Devices = () => {
  const navigate = useNavigate();
  const [devices, setDevices] = useState([] as Device[]);
  const [isLoading, setIsLoading] = useState(false);
  const columns = [
    {
      Header: 'ID',
      accessor: 'id',
      width: 'col',
    },
    {
      Header: 'Number',
      accessor: 'mobileNumber',
      width: 'col',
    },
    {
      Header: 'Latitude',
      accessor: 'latitude',
      width: 'col',
    },
    {
      Header: 'Longitude',
      accessor: 'longitude',
      width: 'col',
    },

    {
      Header: 'Last connection',
      accessor: 'lastConnection',
      width: 'col',
      Cell: (props: any) => {
        return new Date(props.value).toLocaleString();
      },
    },
  ];

  useEffect(() => {
    setIsLoading(true);
    fetch(`${url}/api/devices/?perPage=12`).then((res) => {
      res
        .json()
        .then((data) => {
          setDevices(data.data);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          setDevices([]);
          console.error('Error fetching devices:', error);
        });
    });
  }, []);

  const handleClick = (e: any) => {
    navigate(`/device/${e.id}`);
  };

  return (
    <div className="devices-main-container">
      <section className="main-title">
        <span>Devices list</span>
      </section>
      <section>
        <Table
          columns={columns}
          data={devices}
          isLoading={isLoading}
          nonData="No items to show"
          handleClick={(e: {}) => handleClick(e)}
        />
      </section>
      <section className="d-flex justify-content-end mt-2">
        <button className="btn btn-primary btn-sm">Create device</button>
      </section>
    </div>
  );
};
