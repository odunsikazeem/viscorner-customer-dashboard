import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/index'
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { faHatCowboy } from '@fortawesome/pro-thin-svg-icons'
import { faHatChef } from '@fortawesome/sharp-solid-svg-icons'
import { faPlateUtensils } from '@fortawesome/sharp-regular-svg-icons'

library.add(fas, faTwitter, faFontAwesome, faHatCowboy, faHatChef, faPlateUtensils)

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
    </Router>
  );
}

export default App
