import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';
import {Link} from 'react-router-dom'


function NavigationBar() {
  return (
    <>
      <Navbar className='navbar'>
        <Container>
          <Navbar.Brand ><Link to='/' className='navBrand'>TomatoDieses</Link></Navbar.Brand>
          
          <Nav className="navRight ">
            <Nav.Link ><Link to='/predict' className='navLink'>Predict</Link></Nav.Link>
            <Nav.Link ><Link to='/tomato' className='navLink'>Tomato</Link></Nav.Link>
            <Nav.Link ><Link to='/about' className='navLink'>About</Link></Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default NavigationBar;