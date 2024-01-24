import React from 'react'
import NavBar from '../NavBar/index';
import Footer from '../Footer';
import CustomerRequests from '../Card';

function Dashboard() {
  return (

      <div>
        <NavBar />
        <CustomerRequests />
        <Footer />
      </div>

  )
}

export default Dashboard