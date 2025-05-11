import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      {/* <Container> */}
      <Row className="mb-3">
          <Col>
            <h2 className="section-title">ABOUT THE INSTITUTE</h2>
            <p className="history-text mx-5">
            National Institute of Technology Jamshedpur,earlier known as Regional Institute of Technology was established on 15th August 1960 as a joint venture of Government of India and the Government of Bihar in the chain of REC's (Regional Engineering College) in India with the aim to generate technical graduates of highest standards who could provide technological leadership to the region. It was among the first eight Regional Engineering Colleges (RECs) established as part of the Second Five-Year Plan (1956 - 1961). This was the only REC in the country which was named as RIT (Regional Institute of Technology). Therefore RIT Jamshedpur was actually the REC of undivided Bihar & Jharkhand. The foundation stone of RIT (REC) Jamshedpur was laid by Dr. Srikrishna Sinha, the then chief minister of Bihar , with the aim of nurturing talent and setting high standards of education and excellence. On 27th December 2002, in the line of all other RECs of India, RIT Jamshedpur (may be read as REC Jamshedpur too) was converted to National Institute of Technology Jamshedpur with the status of a Deemed University as per the decision of Govt. of India. The Institute is fully funded and governed by the Ministry of Education (MoE), Government of India since 1st April, 2003. On 15 August 2007, NIT Jamshedpur was given the status of the Institute of National Importance through an Act of the Parliament known as the NIT Act. The Institute has 11 departments including engineering, science and humanities. The Institute, with 200 faculty, 4000 students, 150 administrative and supporting staff, is a self-contained campus. It is located on the outskirts of Jamshedpur on 341.3 acres of sprawling, rolling hilly, wooded land. It combines natural beauty of countryside with urban glamour of an industrial area.
            </p>
            <div className="section-divider" />
          </Col>
        </Row>
        {/* <Row className="mb-5">
          <Col>
            <h2 className="section-title">HISTORY OF EVENT</h2>
            <p className="history-text">
              The conceptual idea of bringing together experts in Tribo-corrosion was conceived as early as 2001. However, it could be “nucleated” in the present form only in December 2006 at NFTDC, Hyderabad, India. Translating the first ever such symposium into a serial edition of conferences became possible thanks to subsequent initiatives of many in the Tribo-corrosion community under the stewardship of Andreas Pauschitz (2nd Conference, Wiener Neustadt Austria in 2009), Peter Blau (3rd Conference, Atlanta, USA, in 2012) and Margaret Stack (4th Conference, Glasgow, UK in 2014). The 5th edition was hosted by NFTDC, Hyderabad under the chairmanship of K. Balasubramanian and Margaret Stack.
            </p>
            <div className="section-divider" />
          </Col>
        </Row> */}
        <Row>
          <Col>
            <h2 className="section-title">ABOUT THE CONFERENCE</h2>
            <p className="highlight-text mx-5">
            The International Conference on Innovations and Research in Mechanical Engineering (ICIRME 2025) is a technical
global event designed to bring together leading academicians, researchers, industry experts, and policymakers to
discuss and showcase groundbreaking advancements in mechanical engineering. This conference, to be held at the
National Institute of Technology (NIT) Jamshedpur, Jharkhand, resonates with the legacy of Jamshedpur as India's first
planned industrial hub established by the visionary TATA Group. With the rapid integration of cutting-edge technologies
like Industry 4.0, Artificial Intelligence, and sustainability-driven engineering practices, the conference will focus on the
role of mechanical engineering in achieving industrial excellence and sustainable development.
            </p>
          </Col>
        </Row>
      {/* </Container> */}
      <div className="border-gray-400 border-2"/>
    </section>
  );
};

export default AboutSection;
