import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import Pagination from '../Pagination';

const CustomerRequests = () => {
  const [customerRequests, setCustomerRequests] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [requestsPerPage] = useState(3); 


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://staging.viscorner.com/wp-json/vc/v1/customer-requests?per_page=10&offset=10&orderby=date&order=DESC');
        setCustomerRequests(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

     const indexOfLastRequest = currentPage * requestsPerPage;
     const indexOfFirstRequest = indexOfLastRequest - requestsPerPage;
     const currentRequests = customerRequests.slice(indexOfFirstRequest, indexOfLastRequest);
   
     
     const paginate = (pageNumber) => setCurrentPage(pageNumber);
  

  return (
    <Wrapper>
    <div>
      <h1>Customer Requests</h1>
      <div className="row">
        {currentRequests.map((customerRequest) => (
          <div className="col-md-4" key={customerRequest.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={customerRequest.attachment} />
              <Card.Body>
                <Card.Title>{customerRequest.title}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>ID:{customerRequest.ID}</ListGroup.Item>
                <ListGroup.Item>Start Date:{customerRequest.start_date}</ListGroup.Item>
                <ListGroup.Item>Description:{customerRequest.content}</ListGroup.Item>
                <ListGroup.Item>Hire Stage:{customerRequest.hire_stage}</ListGroup.Item>
              </ListGroup>
              <Button variant="primary">More Info</Button>
            </Card>
          </div>
        ))}
        <Pagination
        requestsPerPage={requestsPerPage}
        totalRequests={customerRequests.length}
        paginate={paginate}
        currentPage={currentPage}
      />

      </div>
    </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
.row {
    background-color: #97badd;
}
h1 {
  margin-top:20px;
}
`;

export default CustomerRequests;