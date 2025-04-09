// src/components/CustomNavbar.jsx
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '/logo.png'; // adjust path as per your project

const CustomNavbar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <div  className="w-100 d-flex justify-content-between align-items-center px-3">
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Logo"
            width="40"
            height="40"
            className="me-2"
          />
          <div>
            <strong>International Conference</strong>
            <br />
            <small>NIT Jamshedpur</small>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/committee">Committee</Nav.Link>
            <Nav.Link href="/speakers">Speakers</Nav.Link>
            <Nav.Link href="/venue">Venue</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default CustomNavbar;
