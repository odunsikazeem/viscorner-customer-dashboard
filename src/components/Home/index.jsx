import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Landing from '../Landing';


function Home() {
    return (
        <div>
          <h1>Landing </h1>
        
          <Link to="landing" role="button" className="btn btn-link">
            Show Request
          </Link>
          <Routes>
            <Route path="landing" element={<Landing />} />
          </Routes>
        </div>
      );
    }
    export default Home;