import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Predict from './Predict/predict';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='predict' element={<Predict />} />
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
