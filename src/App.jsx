import React from 'react';

// Routes
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//Pages
import Home from './pages/Home';
import Recommendation from './pages/Recommendation';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

//Authors
import Maquiavel from "./pages/authors/Maquiavel"
import Tesla from "./pages/authors/Tesla"
import Nietszche from './pages/authors/Nietzche';
import ReneDescartes from './pages/authors/ReneDescartes';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/maquiavel" element={<Maquiavel/>} ></Route> 
          <Route path="/tesla" element={<Tesla/>}></Route>
          <Route path="/nietszche" element={<Nietszche/>}></Route>
          <Route path="/reneDescartes" element={<ReneDescartes/>}></Route>
          <Route path="/recommendation" element={<Recommendation/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App