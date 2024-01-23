import React from 'react';

const Pagination = ({ requestsPerPage, totalRequests, paginate, currentPage }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalRequests / requestsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className={number === currentPage ? 'active' : ''}>
              <button onClick={() => paginate(number)}>{number}</button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  export default Pagination;