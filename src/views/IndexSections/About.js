import React from "react";

import { Col, Container, Row, UncontrolledCarousel } from "reactstrap";

const images = [
  // these need to be 1920x1080 (or similar aspect ratio)
  {
    src: require("assets/img/slideshows/expo.png"),
    altText: "Engineering Expo",
    caption: "",
    header: "",
  },
  {
    src: require("assets/img/slideshows/radio1.jpg"),
    altText: "Project",
    caption: "",
    header: "",
  },
];

export function About(props) {
  return (
    <Row
      className="p-5 col-12 col-md-10"
      style={{ margin: "0 auto" }}
      id="about"
    >
      <Col md className="pb-md-0 pb-3">
        <Row className="justify-content-center">
          <h2>About</h2>
        </Row>
        <p className="lead">
          IEEE (Institute of Electrical and Electronics Engineers) is the
          world's largest international professional society for Electrical and
          Computer Engineers. Our KU chapter is a professional, academic, and
          social organization with the goal of enabling students to hone their
          technical skills and build relationships through experiences including
          student-led projects, corporate sponsored events, informational
          workshops, and recreational events.
        </p>
      </Col>
      <Col md className="d-flex align-items-center">
        <UncontrolledCarousel items={images}></UncontrolledCarousel>
      </Col>
    </Row>
  );
}
