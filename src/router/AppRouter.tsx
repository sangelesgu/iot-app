import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/home/Home';
import { Devices } from '../pages/devices/Devices';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/devices" element={<Devices />} />
    </Routes>
  );
};
