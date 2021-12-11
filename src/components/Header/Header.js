import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import headerLinkedin from '../../images/headerLinkdin.svg';
import humbergureMenu from '../../images/humbergursMenu.svg';
import ball from '../../images/world.svg';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" className='menu'>
  <Container>
  <Navbar.Brand href="#home">😃 <span className='logo'>Sajjad</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto navigation">
      <Nav.Link className='items active' href="#features">Home</Nav.Link>
      <Nav.Link className='items' href="#pricing">Portfolio</Nav.Link>
      <Nav.Link className='items' href="#pricing">Testimonial</Nav.Link>
      <Nav.Link className='items' href="#pricing">About</Nav.Link>
    </Nav>
    <Nav className='navigation'>
      <Nav.Link className='items' href="#deets"><Image src={ball}></Image></Nav.Link>
      <Nav.Link className='items' href="#deets"><Image src={headerLinkedin}></Image></Nav.Link>
      <Nav.Link className='items' href="#deets"><Image src={humbergureMenu}></Image></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;