import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Routes from './Routes';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes />
      <Footer />
    </>
  );
};

export default App;
