import React from "react";

import {
  Col,
  Container,
  Row,
  UncontrolledCarousel,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardDeck,
  CardTitle,
} from "reactstrap";

export function Projects(props) {
  const imgHeight = 250;
  return (
    <>
      <Row className="justify-content-center" id="projects">
        <h2>Our Projects</h2>
      </Row>
      <Row
        className="p-5 justify-content-center justify-content-md-center"
        id="projects"
        style={{ gap: 10 }}
      >
        <Card className="">
          <CardImg
            src={require("assets/img/slideshows/drone.png")}
            top
            height={imgHeight}
            style={{ objectFit: "cover" }}
          />
          <CardBody
            className="bg-primary text-white"
            style={{ borderRadius: "0 0 5px 5px" }}
          >
            <h3 className="text-white display-4">RC Drone</h3>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            src={require("assets/img/slideshows/mirror.jpg")}
            top
            height={imgHeight}
            style={{ objectFit: "cover" }}
          />
          <CardBody
            className="bg-primary text-white"
            style={{ borderRadius: "0 0 5px 5px" }}
          >
            <h3 className="text-white display-4">Smart Mirror</h3>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            src={require("assets/img/slideshows/radio2.jpg")}
            top
            height={imgHeight}
            style={{ objectFit: "cover" }}
          />
          <CardBody
            className="bg-primary text-white"
            style={{ borderRadius: "0 0 5px 5px" }}
          >
            <h3 className="text-white display-4">FM Radio</h3>
          </CardBody>
        </Card>
      </Row>
    </>
  );
}
