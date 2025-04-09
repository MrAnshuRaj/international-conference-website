import React from 'react';
import { Container } from 'react-bootstrap';
import './herosection.css';

import brochureImg from '../assets/brochure.png';

const HeroSection = () => {
  return (
    <div className="hero-section mt-10">
      <div className="overlay">
        <Container className="text-center">
          <img
            src={brochureImg}
            alt="Conference Brochure"
            className="brochure-img"
          />
        </Container>
      </div>
    </div>
  );
};

export default HeroSection;
