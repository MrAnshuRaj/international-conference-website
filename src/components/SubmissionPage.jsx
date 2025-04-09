import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const SubmissionPage = () => {
  const tracks = [
    "High Temperature Tribo-corrosion",
    "Lubricants and tribo-corrosion interactions",
    "Industrial Tribo-corrosion and Detection Methods",
    "Models and mechanistic maps of Tribo-corrosion",
    "Tribology in Bio-Medical Applications",
    "Case studies",
    "Corrosion Protection for Electric Vehicles",
    "Many more related to the theme"
  ];

  const dates = [
    {
      title: "Deadline for abstract submission",
      oldDate: "31st July",
      newDate: "26th August 2024",
    },
    {
      title: "Acceptance notification",
      oldDate: "20th Aug.",
      newDate: "09th September 2024",
    },
    {
      title: "Registration Start",
      oldDate: "01st Sept. 2024",
      newDate: "16th September 2024",
    },
    {
      title: "Registration End",
      newDate: "30th November 2024",
    },
  ];

  return (
    <div className="bg-white text-center mb-6">
      <h2 className="text-4xl !font-bold !text-blue-900">SUBMISSION</h2>
      <p className="text-red-600 text-lg mt-2">Submit an abstract</p>
      <div className="h-1 w-16 bg-green-600 mx-auto my-3 rounded"></div>

      <p className="text-lg font-semibold mt-4">
        The deadline for submission of the Abstracts has been postponed to August 26th!!! Please{" "}
        <span className="text-red-600 font-bold">find here the template for your Abstract</span>.
      </p>

      <Container className="mt-6">
        <Row className="justify-content-center gap-y-4">
          {dates.map((item, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={3}
              className="flex justify-center"
            >
              <Card className="p-4 shadow rounded w-full">
                <p className="text-gray-600">{item.title}</p>
                {item.oldDate && (
                  <p className="text-gray-500 line-through">{item.oldDate}</p>
                )}
                <p className="font-semibold text-black">{item.newDate}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <div className="bg-blue-100 mt-10 px-6 py-4 rounded max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold text-blue-900 mb-4">
          Submit your abstract for the tracks:
        </h3>
        <ul className="text-left text-gray-800 space-y-2">
          {tracks.map((track, index) => (
            <li key={index} className="flex items-start gap-2">
              <FaCheck className="text-green-600 mt-1" />
              {track}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubmissionPage;
