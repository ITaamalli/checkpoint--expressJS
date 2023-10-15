import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from './pages/Homepage';
import Servicespage from './pages/Servicespage';
import Contactpage from './pages/Contactpage';
import { useEffect, useState } from 'react';
import axios from "axios";

function App() {
  const [working, setworking] = useState(null);
  useEffect (() => {
    axios
    .get("http://localhost:8000")
    .then(() => setworking(true)) 
    .catch (() => setworking(false)); 
  }, []);
  return (
    <div className="App">
      {working === true ? (
        <BrowserRouter>
          <Routes>
            <Route path='/' element= {<Homepage/>} />
            <Route path='/services' element= {<Servicespage/>} />
            <Route path='/contact' element= {<Contactpage/>} /> 
            
          </Routes>
        </BrowserRouter>
      ) :
      (
      <></>
      )}
     
    </div>
  );
}

export default App;
