import React from 'react'
import NavBar from '../NavBar/index';
import Footer from '../Footer';
import CustomerRequests from '../Card';
import Landing from '../Landing';

function Dashboard() {
  return (

      <div>
        <NavBar />
        {/* <CustomerRequests /> */}
        <Landing />
        <Footer />
      </div>

  )
}

export default Dashboard