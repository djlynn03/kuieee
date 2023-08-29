import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, Container, Row, Col } from "reactstrap";

function Hero(props) {
  const navigate = useNavigate();

  return (
    <>
      <div className="position-relative">
        <section className="section section-hero section-shaped">
          <div className="shape shape-style-1 shape-default"></div>
          <Container className="shape-container d-flex align-items-center py-lg">
            <div className="col px-0">
              <Row className="align-items-center justify-content-center">
                <Col className="text-center" lg="8">
                  <Row className="align-items-center justify-content-center mb-5">
                    <img
                      alt="..."
                      className="img-fluid px-3"
                      src={require("assets/img/brand/ieee_icon_white.png")}
                      style={{ width: 150 }}
                    />
                    <span className="text-white display-1 font-weight-bolder">
                      ×
                    </span>
                    {/* <i className="ni ni-3x ni-fat-remove text-white" /> */}
                    <img
                      alt="..."
                      className="img-fluid px-3"
                      src={require("assets/img/brand/ku_logo_white.png")}
                      style={{ width: 150 }}
                    />
                  </Row>
                  <h1
                    className="text-white font-weight-bolder display-2"
                    style={{ textTransform: "uppercase" }}
                  >
                    University of Kansas
                    <br />
                    IEEE Student Branch
                  </h1>
                  {/* <p className="lead text-white">
                      A beautiful Design System for Bootstrap 4. It's Free and
                      Open Source.
                    </p> */}
                  <div className="btn-wrapper mt-5">
                    <Button
                      className="btn-white mb-3 mb-sm-0 rounded-pill"
                      color="default"
                      size="lg"
                      onClick={() => navigate("/#calendar")}
                    >
                      <span className="btn-inner--text">See our schedule</span>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero;
