import React from 'react'
import NavBar from '../NavBar';
import Footer from '../Footer';
import CustomerRequests from '../Card';

function Dashboard() {
  return (
    <div>
        <NavBar />
        Dashboard
        <CustomerRequests />
        <Footer />
    </div>
  )
}

export default Dashboard