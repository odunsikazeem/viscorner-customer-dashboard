import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Dashboard, Landing, Error, Register } from "./components/pages/Index"
import { ToastContainer } from 'react-toastify';

import './App.css';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'


// library.add(fas, faTwitter, faFontAwesome)

function App() {
  return (

        <Router>
        <Routes>
          <Route path='/' element={<Dashboard />}/>
          <Route path='landing' element={<Landing />}/>
          <Route path='register' element={<Register />}/>
          <Route path='*' element={<Error />}/>
        </Routes>
        <ToastContainer position='top-center'/>
            </Router>
  );
}

export default App
