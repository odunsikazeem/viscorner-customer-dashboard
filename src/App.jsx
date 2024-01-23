import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/index';
import Landing from './components/Landing';
import Footer from './components/Footer';
import './App.css';
import CustomerRequests from './components/Card';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'


// library.add(fas, faTwitter, faFontAwesome)

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Landing />
        <CustomerRequests />
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App
