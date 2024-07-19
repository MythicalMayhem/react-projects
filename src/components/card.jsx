import Card from 'react-bootstrap/Card';

function Item() {
  return (
    <Card style={{ width: '250px', height: '350px' }}>
      <Card.Img variant="top" src="logo512.png" style={{ height: '200px', width: '250px' }} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Item;