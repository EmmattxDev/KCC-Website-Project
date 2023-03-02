import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import { Home, About, Services, Contact, Gallery, Training, BlogList} from './pages';
import { Navbar, Mfooter } from './components';

function App() {
  return (
    <>

    <Navbar />

    <Routes>
      
      <Route path='/' index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='services' element={<Services />} />
      <Route path='gallery' element={<Gallery />} />
      <Route path='training' element={<Training />} />
      <Route path='/blog'>
        <Route index element={<BlogList />} />
        <Route path='/blog/:id' element={<h1>Blog 1</h1>} />
      </Route>
      <Route path='contact' element={<Contact />} />
    </Routes>

    <Mfooter />
    </>


  );
}

export default App;
