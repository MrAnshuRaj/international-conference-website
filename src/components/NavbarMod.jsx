import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/nitlogogold.png';

const Navbarfancy = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-blue-600/80 backdrop-blur-md shadow-md'
          : 'bg-blue-600'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 md:px-8">
        {/* Logo & Brand */}
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-15 h-15 object-contain" />
          <div className="leading-tight text-white">
            <span className="font-bold text-xl block">ICIRME 2025</span>
            <span className="text-base">NIT Jamshedpur</span>
          </div>
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`flex-col md:flex-row md:flex items-center gap-4 md:gap-8 absolute md:static top-full left-0 w-full md:w-auto bg-blue-600 md:bg-transparent px-6 md:px-0 py-4 md:py-0 transition ${
            menuOpen ? 'flex' : 'hidden'
          }`}
        >
          {[
            { name: 'Home', to: '/' },
            { name: 'Committee', to: '/committee' },
            { name: 'Venue', to: '/venue' },
            { name: 'Contact', to: '/contact' },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-white !no-underline text-lg hover:font-bold transition ${
                  isActive ? 'font-bold' : ''
                }`
              }
              onClick={() => setMenuOpen(false)} // Close mobile menu on click
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbarfancy;
