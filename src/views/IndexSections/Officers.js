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
              src={require("assets/img/officers/joe.webp")}
              alt="Joe Bijoy"
            />
            <p>Joe Bijoy</p>
          </Col>
          <Col>
            <strong>Vice President</strong>
            <img
              src={require("assets/img/officers/ron.webp")}
              alt="Ron Heminway"
            />
            <p>Ron Heminway</p>
          </Col>
          <Col>
            <strong>Treasurer</strong>
            <img
              src={require("assets/img/officers/arturo.webp")}
              alt="Arturo Solorio"
            />
            <p>Arturo Solorio</p>
          </Col>
          <Col>
            <strong>Treasurer</strong>
            <img
              src={require("assets/img/officers/aiham.webp")}
              alt="Aiham Alhmoud"
            />
            <p>Aiham Alhmoud</p>
          </Col>
          <Col>
            <strong>PR Chair</strong>
            <img
              src={require("assets/img/officers/cade.webp")}
              alt="Cade Wilburn"
            />
            <p>Cade Wilburn</p>
          </Col>
          <Col>
            <strong>EXPO Rep</strong>
            <img
              src={require("assets/img/officers/duncan.webp")}
              alt="Duncan Lynn"
            />
            <p>Duncan Lynn</p>
          </Col>
        </Row>
      </Col>
      <Col lg className="pb-md-0 pb-3 mx-1">
        <Row className="justify-content-center">
          <h2>Project Leads</h2>
        </Row>
        <Row className="headshot-list">
          <Col>
            <strong>Solar Station</strong>
            <img src={require("assets/img/project-leads/lily.webp")} />
            <p>Lily Bray</p>
          </Col>
          <Col>
            <strong>Metal Detector</strong>
            <img src={require("assets/img/project-leads/david.webp")} />
            <p>David Levy</p>
          </Col>
          <Col>
            <strong>Interactive Board Game</strong>
            <img src={require("assets/img/project-leads/cristian.webp")} />
            <p>Cristian Amaro</p>
          </Col>
          <Col>
            <strong>Bluetooth Speaker</strong>
            <img src={require("assets/img/project-leads/aiden.webp")} />
            <p>Aiden Martinez</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
