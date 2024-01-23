import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/NavBar/index';
import { Landing, Dashboard, Register, Error } from './components/pages/Index'
// import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import CustomerRequests from './components/Card';
import Request from './components/Request';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'


// library.add(fas, faTwitter, faFontAwesome)

function App() {
  return (

    <Router>
      <NavBar />
    <Routes>
      <Route path='/' element={<Dashboard />}/>
      <Route path='landing' element={<Landing />}/>
      <Route path='register' element={<Register />}/>
      <Route path='request/*' element={<Request/>}/>
      <Route path='*' element={<Error />}/>
    </Routes>
    <ToastContainer position='top-center'/>
    <Footer/>
        </Router>

  );
}

export default App
