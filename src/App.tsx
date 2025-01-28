import React from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import PlayerDetails from './components/PlayerDetails';

const App = () => {
  const notify = () => toast("Welcome to the app!");

  return (
    <>
    
      <Nav />
      <Home />
      <PlayerDetails />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce} 
      />
    </>
  );
};

export default App;
