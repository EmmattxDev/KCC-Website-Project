import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import './css/input.css';
import { Home, About, Services, Contact, Gallery, Training} from './pages';
import { Footer, Navbar } from './components';

function App() {
  return (
    <>

    <Navbar />

    <Routes>
      <Route path='/' index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='services' element={<Services />} />
      <Route path='training' element={<Training />} />
      <Route path='gallery' element={<Gallery />} />
      <Route path='contact' element={<Contact />} />
    </Routes>

    <Footer />

    </>


  );
}

export default App;
