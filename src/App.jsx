import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Routes from './Routes';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when detecting route change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes />
      <Footer />
    </>
  );
};

export default App;
