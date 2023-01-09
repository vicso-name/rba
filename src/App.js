import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap-grid.min.css"
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {

  const [menuExpanded, setMenuExpanded] = useState(false);
  function toggleMenu() {
    setMenuExpanded(!menuExpanded);
  }
  
  return (
    <div className="App">
        <Header onMenuToggle={toggleMenu} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer menuExpanded={menuExpanded}/>
        
    </div>
  );
}

export default App;
