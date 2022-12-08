import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Predict from './Predict/predict';
import Tomato from './Tomato/Tomato';
import About from './About/About';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='predict' element={<Predict />} />
      <Route path='tomato' element={<Tomato />} />
      <Route path='about' element={<About />} />
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
