import React from 'react'
import './Header.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import  logo  from "../Images/Logo.png";
import Button from '@mui/material/Button';


const Header = () => {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" className="Header_nav" >
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img src={logo} className="img-fluid logoImage" alt="" />
          <h4 className="VulLogo">Vulcan</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className="nav_liddd">About</Nav.Link>
            <Nav.Link href="#pricing" className="nav_liddd">How it Works</Nav.Link>
            <Nav.Link href="#pricing" className="nav_liddd">Courses</Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className="nav_liddd">Become an Educator</Nav.Link>
           
           <div className="mt-1">
            <Button variant="outlined" size="small" className="me-1" >Log In </Button>
            <Button variant="contained" size="small">Sign Up</Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header;