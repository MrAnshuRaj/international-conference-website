import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './AboutSection.css';
export default function Instructions() {
  return (
    <div>

      <Row className="mb-5">
          <Col>
          <div className="section-divider mt-4" />
            <h2 className="text-5xl !font-bold !text-blue-900 mb-2 uppercase text-center">
                INSTRUCTIONS FOR PRESENTERS
            </h2>
            <p className="history-text px-40 mt-3 !text-orange-600">
            Oral presentations: your presentation slot is 20 minutes, with 15 minutes for presentation and 5 minutes for discussion. The time schedule will be strictly followed, so prepare your presentation to fit precisely within 15 minutes.

            If you wish, you can use the template provided. We expect the authors to present Background, Objectives, Detailed description of Methodology, Results, Discussion and Conclusion. The main emphasis of your presentation should be on Methodology, Results and Discussion
            </p>
            <div className="section-divider" />
          </Col>
        </Row>
    </div>
  )
}
