import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutSection.css';

export default function Instructions() {
  return (
    <div className="bg-light py-2">
      <Container>
        <Row className="mb-3">
          <Col>
            <div className="section-divider mt-4" />
            <h2 className="text-5xl !font-bold !text-blue-900 mb-4 mt-4 uppercase text-center">
              INSTRUCTIONS FOR PRESENTERS
            </h2>
            <p className="history-text px-md-5 px-3 mt-3 text-warning !text-orange-600">
              Oral presentations: your presentation slot is 20 minutes, with 15 minutes for presentation and 5 minutes for discussion.
              The time schedule will be strictly followed, so prepare your presentation to fit precisely within 15 minutes. <br /><br />
              If you wish, you can use the template provided. We expect the authors to present Background, Objectives, Detailed description
              of Methodology, Results, Discussion and Conclusion. The main emphasis of your presentation should be on Methodology,
              Results and Discussion.
            </p>
            <div className="section-divider" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
