import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';
import Footer from "./components/Footer"
import About from './components/About';
import Credential from './components/Credential';
import Contact from './components/Contact';

function App() {
  return (
    <div className="main-website">
      <div className="container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/credential" element={<Credential />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;