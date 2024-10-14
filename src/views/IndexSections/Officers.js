/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import { Col, Container, Row, UncontrolledCarousel } from "reactstrap";

export function Officers(props) {
  return (
    <Row className="p-5 col-12 col-md-10" style={{ margin: "0 auto" }}>
      <Col lg className="pb-md-0 pb-3 mx-1 officers-list">
        <Row className="justify-content-center">
          <h2>Officers</h2>
        </Row>
        <Row className="headshot-list">
          <Col>
            <strong>President</strong>
            <img
              src={require("assets/img/officers/aiham.webp")}
              alt="Aiham Alhmoud"
            />
            <p>Aiham Alhmoud</p>
          </Col>
          <Col>
            <strong>Vice President</strong>
            <img
              src={require("assets/img/officers/david.webp")}
              alt="David Levy"
            />
            <p>David Levy</p>
          </Col>
          <Col>
            <strong>Treasurer</strong>
            <img
              src={require("assets/img/officers/jimena.webp")}
              alt="Jimena Del Angel"
            />
            <p>Jimena Del Angel</p>
          </Col>
          <Col>
            <strong>Secretary</strong>
            <img
              src={require("assets/img/officers/aiden.webp")}
              alt="Aiden Martinez"
            />
            <p>Aiden Martinez</p>
          </Col>
          <Col>
            <strong>PR Chair</strong>
            <img
              src={require("assets/img/officers/lily.webp")}
              alt="Lily Bray"
            />
            <p>Lily Bray</p>
          </Col>
          <Col>
            <strong>Project Director</strong>
            <img
              src={require("assets/img/officers/felipe.webp")}
              alt="Felipe Tala"
            />
            <p>Felipe Tala</p>
          </Col>
        </Row>
      </Col>
      <Col lg className="pb-md-0 pb-3 mx-1">
        <Row className="justify-content-center">
          <h2>Project Leads</h2>
        </Row>
        <Row className="headshot-list">
          <Col>
            <strong>Solar E-Bike</strong>
            <img src={require("assets/img/project-leads/momin.webp")} />
            <p>Muhammad Momin Rahman</p>
          </Col>
          <Col>
            <strong>Guitar Amp</strong>
            <img src={require("assets/img/project-leads/julian.webp")} />
            <p>Julian Gutierrez</p>
          </Col>
          <Col>
            <strong>CyberDeck</strong>
            <img src={require("assets/img/project-leads/daniel.webp")} />
            <p>Daniel Bobadilla</p>
          </Col>
          <Col>
            <strong>FM Radio</strong>
            <img src={require("assets/img/project-leads/chris.webp")} />
            <p>Chris Hawkins</p>
          </Col>
          <Col>
            <strong>Parking Availability Software</strong>
            <img src={require("assets/img/project-leads/lena.webp")} />
            <p>Lena Palmieri</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
