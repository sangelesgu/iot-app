import React from 'react';
import { AppRouter } from './router/AppRouter';
import Header from './components/layaout/Header';

export const App = () => {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
};
