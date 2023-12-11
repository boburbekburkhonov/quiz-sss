import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import List from './Pages/List/List';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';

const App = () => {
  return (
      <>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/list" element={<List />} />
      </Routes>
      </>
  );
};

export default App;