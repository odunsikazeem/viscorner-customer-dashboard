import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/index'
import Landing from './components/Landing/index'
import './App.css'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'


// library.add(fas, faTwitter, faFontAwesome)

function App() {
  return (
    <Router>
      <div>
        <Landing />
        <Navbar />
      </div>
    </Router>
  );
}

export default App
