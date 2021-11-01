import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Button from '@restart/ui/esm/Button';
import { Card } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Stack gap={2} className="col-botones">
          <Button class="dos">Home</Button>
          <Button class="dos">Store</Button>
          <Button class="dos">About</Button>
          <Button class="dos">Blog</Button>
          <Button class="dos">Point of Sale</Button>
        </Stack>
        <h1 className="title">N E W B R A N D</h1>
        <Container fluid>
        </Container>
      </header>
      <main className="App-main">
      <Card className="text-center">
  <Card.Body>
    <Card.Title>New Clothing Collection</Card.Title>
    <Button classname="primary">Shop Now</Button>
  </Card.Body>
</Card>
      </main>
      <div>
        <main className="dos">
        <CardGroup>
  <Card>
    <Card.Img variant="top" src="holder.js/313px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        Cabañas Nahuel Huapi 
        4 personas $5000 x 5 dias.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/313px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        Wiskas a mitad de precio.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/313px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
       Jean
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    </Card.Footer>
  </Card>
</CardGroup>
        </main>
      </div>
    </div>
    



  );
}


export default App;
