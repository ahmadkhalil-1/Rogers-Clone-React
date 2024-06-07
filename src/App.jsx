import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './index.css';
import FiveGMob from './Components/FiveGMob';
import Home from './Components/Home/Home';
import SmartPhones from './Components/SmartPhones';
import Nav from './Components/Nav';
import Nav2 from './Components/Nav2';
import Footer from './Components/Footer';
import Buynow from './Components/Buynow';

function App() {
  return (
    <Router>
      <Nav />
      <Nav2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobile/plans/fivegmob" element={<FiveGMob />} />
        <Route path="/mobile/phones/smartphones" element={<SmartPhones />} />
        <Route path="/new5g/buynow" element={<Buynow />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
