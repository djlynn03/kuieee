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
      <Container>
        <h4>2023-2024</h4>
        <hr className="my-3" />
        <Row
          className="px-3 justify-content-center justify-content-md-center current-projects"
        >
          <Card>
            <CardImg
              src={require("assets/img/projects/solar.webp")}
              top
              height={imgHeight}
              style={{ objectFit: "cover" }}
            />
            <CardBody
              className="bg-primary text-white"
              style={{ borderRadius: "0 0 5px 5px" }}
            >
              <h3 className="text-white display-4">Solar Station</h3>
              <small>
                Solar powered charging station for phones and other mobile
                devices
              </small>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              src={require("assets/img/projects/metaldetector.webp")}
              top
              height={imgHeight}
              style={{ objectFit: "cover" }}
            />
            <CardBody
              className="bg-primary text-white w-max-50"
              style={{ borderRadius: "0 0 5px 5px" }}
            >
              <h3 className="text-white display-4">Metal Detector</h3>
              <small>
                Small handheld metal detector using a coil to discover
                conductive metals in its electromagnetic field
              </small>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              src={require("assets/img/projects/boardgame.webp")}
              top
              height={imgHeight}
              style={{ objectFit: "cover" }}
            />
            <CardBody
              className="bg-primary text-white"
              style={{ borderRadius: "0 0 5px 5px" }}
            >
              <h3 className="text-white display-4">Interactive Board Game</h3>
              <small>
                Small handheld metal detector using a coil to discover
                conductive metals in its electromagnetic field
              </small>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              src={require("assets/img/projects/speaker.webp")}
              top
              height={imgHeight}
              style={{ objectFit: "cover" }}
            />
            <CardBody
              className="bg-primary text-white"
              style={{ borderRadius: "0 0 5px 5px" }}
            >
              <h3 className="text-white display-4">Bluetooth Speaker</h3>
              <small>
                Bluetooth speaker controlled by an Arduino with RGB LEDs and a
                custom-built wood and plexiglass enclosure
              </small>
            </CardBody>
          </Card>
        </Row>
      </Container>
      <Container className="mt-5">
        <h4>2022-2023</h4>
        <hr className="my-3" />
        <Row
          className="px-3 justify-content-center justify-content-md-center previous-projects"
        >
          <Card>
            <CardImg
              src={require("assets/img/projects/drone.webp")}
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
              src={require("assets/img/projects/mirror.webp")}
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
              src={require("assets/img/projects/radio2.webp")}
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
      </Container>
    </>
  );
}
