import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Card from '../Card';

function Request(props) {
  return (
    <div>
      <h1>Make a request</h1>
    
      <Link to="card" role="button" className="btn btn-link">
        Show Request
      </Link>
      <Link to="request" role="button" className="btn btn-link">
        Hide request
      </Link>
      <Routes>
        <Route path="card" element={<Card />} />
      </Routes>
    </div>
  );
}

export default Request;
