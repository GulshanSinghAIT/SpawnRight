
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import PlayerDetails from './components/PlayerDetails';
import './App.css';

const App = () => {
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
