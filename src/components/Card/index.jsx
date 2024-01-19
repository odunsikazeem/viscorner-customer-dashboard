import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import App from '../../App';


function CustomerCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         
        </Card.Text>
        <Button variant="primary">More Info</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomerCard;