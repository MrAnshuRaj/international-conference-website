import React from 'react'; 
import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbarfancy.css'; // For custom styles
import logo from "../assets/nitlogo.png"
const Navbarfancy = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <div style={{
        width: "100%",
        // backgroundColor: "red",
        display:"flex",
        padding: "0 20px"
      }}>
        <Navbar.Brand href="/home" className="d-flex align-items-center">
            <img className="mx-auto w-12 h-15 object-cover me-2"
              src={logo}
              alt="Logo"
              width="40"
              height="40"
            />
            <div>
              <strong className="text-white">ICIRME-2025</strong>
              <br />
              <small className="text-white">NIT Jamshedpur</small>
            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav">
        <Nav className="ms-auto">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link text-white !text-lg ${isActive ? 'fw-bold' : ''}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/committee"
                className={({ isActive }) =>
                  `nav-link text-white !text-lg ${isActive ? 'fw-bold' : ''}`
                }
              >
                Committee
              </NavLink>
              <NavLink
                to="/speakers"
                className={({ isActive }) =>
                  `nav-link text-white !text-lg ${isActive ? 'fw-bold' : ''}`
                }
              >
                Speakers
              </NavLink>
              <NavLink
                to="/venue"
                className={({ isActive }) =>
                  `nav-link text-white !text-lg ${isActive ? 'fw-bold' : ''}`
                }
              >
                Venue
              </NavLink>
              <NavLink
                to="/submission"
                className={({ isActive }) =>
                  `nav-link text-white !text-lg ${isActive ? 'fw-bold' : ''}`
                }
              >
                Submission
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) =>
                `nav-link text-white !text-lg ${isActive ? 'fw-bold' : ''}`}>
                Contact
              </NavLink>

            </Nav>

        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navbarfancy;

