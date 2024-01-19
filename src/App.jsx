import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/index'
import CustomerCard from './components/Card';
import './App.css'
import axios from "axios";
import { useEffect } from "react";
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'


// library.add(fas, faTwitter, faFontAwesome)

function App() {

    useEffect(() => {
    axios.get("https://staging.viscorner.com/wp-json/vc/v1/customer-requests")
    .then(response => console.log(response.data));
    })

  return (
    <Router>
      <div>
        <Navbar />
        <CustomerCard />
      </div>
    </Router>
  );
}

export default App



