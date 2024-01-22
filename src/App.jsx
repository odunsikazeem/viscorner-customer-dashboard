import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/NavBar/index';
import { Landing, Error, Dashboard, Register } from './components/pages'
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <BrowserRouter>
<Routes>
  <Route path='/' element={<Dashboard />}/>
  <Route path='landing' element={<Landing />}/>
  <Route path='register' element={<Register />}/>
  <Route path='*' element={<Error />}/>
</Routes>
<ToastContainer position='top-center'/>
    </BrowserRouter>
  );
}

export default App
