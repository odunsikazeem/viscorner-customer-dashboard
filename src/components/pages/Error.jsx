import React from 'react'
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div>
        <h3>Page not found</h3>
        <p>We can't seem to find the page you are looking for</p>
        <Link to="/">back home</Link>
    </div>
  )
}

export default Error