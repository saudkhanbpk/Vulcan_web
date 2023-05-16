import React from 'react'
import './header.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  logo  from "../../assets/images/Logo.png";
import Button from '@mui/material/Button';
import {Link, useNavigate } from 'react-router-dom';

 
const Header = () => {
  
  //  navigation hook declare 
  const navigate = useNavigate();

  // navigation handle func  
 const navigateToLogin = () => {
  navigate('/login');
};
 // navigation handle func  
 const navigateToSignup = () => {
  navigate('/signup');
};
  return (
      
    <Navbar collapseOnSelect  expand="lg" className="Header_nav sticky-top" >
      <Container className='navbar___Header'>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={logo} className=" img-fluid logoImage" alt="" />
          <h4 className="VulLogo">Vulcan</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about" className="nav_liddd">About</Nav.Link>
            <Nav.Link as={Link} to="/how-it-works" className="nav_liddd">How it Works</Nav.Link>
            <Nav.Link as={Link} to="/courses" className="nav_liddd">Courses</Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/become-educator" className="nav_liddd me-4">Become an Educator</Nav.Link>
           <div className="">
            <Button variant="outlined" size="small" color="common" className="me-4" onClick={navigateToLogin}>Log In </Button>
            <Button variant="contained" size="small" className="me-1"  onClick={navigateToSignup}>Sign Up</Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;