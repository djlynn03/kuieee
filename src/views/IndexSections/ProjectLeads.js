/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import { Col, Row } from "reactstrap";

export function ProjectLeads(props) {
  return (
    <Row
      className="p-5 col-12 col-md-10"
      style={{ margin: "0 auto" }}
    >
      <Col md className="pb-md-0 pb-3">
        <Row className="justify-content-center">
          <h2>Project Leads</h2>
        </Row>
        <Row className="headshot-list">
          <Col sm>
            <strong>Solar Station</strong>
            <img src={require("assets/img/project-leads/lily.webp")} />
            <p>Lily Bray</p>
          </Col>
          <Col sm>
            <strong>Metal Detector</strong>
            <img src={require("assets/img/project-leads/david.webp")} />
            <p>David Levy</p>
          </Col>
          <Col sm>
            <strong>Interactive Board Game</strong>
            <img src={require("assets/img/project-leads/cristian.webp")} />
            <p>Cristian Amaro</p>
          </Col>
          <Col sm>
            <strong>Bluetooth Speaker</strong>
            <img src={require("assets/img/project-leads/aiden.webp")} />
            <p>Aiden Martinez</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
