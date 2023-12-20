import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import {Route, Routes } from "react-router-dom";
import Home from './pages/Home';

function App() {

  useEffect(() => {
    require('preline/preline');
  }, []);


      return (
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      );
    };

export default App;
