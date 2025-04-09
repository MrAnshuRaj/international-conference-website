import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <Container>
      <Row className="mb-3">
          <Col>
            <h2 className="section-title">ABOUT THE INSTITUTE</h2>
            <p className="history-text">
            National Institute of Technology Jamshedpur,earlier known as Regional Institute of Technology was established on 15th August 1960 as a joint venture of Government of India and the Government of Bihar in the chain of REC's (Regional Engineering College) in India with the aim to generate technical graduates of highest standards who could provide technological leadership to the region. It was among the first eight Regional Engineering Colleges (RECs) established as part of the Second Five-Year Plan (1956 - 1961). This was the only REC in the country which was named as RIT (Regional Institute of Technology). Therefore RIT Jamshedpur was actually the REC of undivided Bihar & Jharkhand. The foundation stone of RIT (REC) Jamshedpur was laid by Dr. Srikrishna Sinha, the then chief minister of Bihar , with the aim of nurturing talent and setting high standards of education and excellence. On 27th December 2002, in the line of all other RECs of India, RIT Jamshedpur (may be read as REC Jamshedpur too) was converted to National Institute of Technology Jamshedpur with the status of a Deemed University as per the decision of Govt. of India
            </p>
            <div className="section-divider" />
          </Col>
        </Row>
        <Row className="mb-5">
          <Col>
            <h2 className="section-title">HISTORY OF EVENT</h2>
            <p className="history-text">
              The conceptual idea of bringing together experts in Tribo-corrosion was conceived as early as 2001. However, it could be “nucleated” in the present form only in December 2006 at NFTDC, Hyderabad, India. Translating the first ever such symposium into a serial edition of conferences became possible thanks to subsequent initiatives of many in the Tribo-corrosion community under the stewardship of Andreas Pauschitz (2nd Conference, Wiener Neustadt Austria in 2009), Peter Blau (3rd Conference, Atlanta, USA, in 2012) and Margaret Stack (4th Conference, Glasgow, UK in 2014). The 5th edition was hosted by NFTDC, Hyderabad under the chairmanship of K. Balasubramanian and Margaret Stack.
            </p>
            <div className="section-divider" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="section-title">ABOUT THE CONFERENCE</h2>
            <p className="highlight-text">
              Tribo-corrosion poses a significant material challenge across various environments, often resulting in notable declines in energy efficiency. Its impact extends beyond traditional sectors like oil, gas, and nuclear industries, encompassing emerging fields such as biomedical, dental, tidal, wind, and wave energy. Recognized as a critical factor in industrial operations, effective Tribo-corrosion management is essential. Implementing proper practices not only safeguards plants and machinery, but also boosts operational efficiency, curtails energy usage, and averts costly breakdowns.
            </p>
            <p>
              Moreover, the objective of the conference is to convene prominent industrialists, engineers, academicians, scientists, researchers, and research students, fostering the exchange of experiences and research findings across a wide range of topics pertaining to Tribo-corrosion. This gathering serves as a platform for participants to showcase and deliberate on the latest innovations, trends, practical hurdles faced, and solutions implemented in Tribo-corrosion, addressing the demands of an ever-expanding technological landscape.
            </p>
            <p>
              The unique aspect of the 6th ICTC 2024 is its focus on Tribo-corrosion for Sustainability & Reliability, incorporating innovative methodologies. These approaches are vital for the holistic betterment of human livelihoods and the advancement of economies.
            </p>
            <p>
              The conference will be held in the beautiful campus of Indian Institute of Technology Delhi
            </p>
          </Col>
        </Row>
      </Container>
      <div className="bg-gray-300"style={{ height: "2px", margin: "1.5rem 0" }} />
    </section>
  );
};

export default AboutSection;
