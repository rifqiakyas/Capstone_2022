import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';


function NavigationBar() {
  return (
    <>
      <Navbar className='navbarr'>
        <Container>
          <Navbar.Brand href="#home">TomatoDieses</Navbar.Brand>
          <Nav className="navRight">
            <Nav.Link href="#home">Predict</Nav.Link>
            <Nav.Link href="#features">Tomato</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;