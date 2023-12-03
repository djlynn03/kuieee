import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
// import { scrollNavigate } from "./NavUtils";

// class LandingNavbar extends React.Component {
function LandingNavbar(props) {
  const [collapseClasses, setCollapseClasses] = useState("");
  const [colapseOpen, setCollapseOpen] = useState(false);
  const [admin, setAdmin] = useState(props.admin || false);
  const [destination, setDestination] = useState(undefined);

  const navigate = useNavigate();

  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }, []);

  const onExiting = () => {
    setCollapseClasses("collapsing-out");
  };

  const onExited = () => {
    setCollapseClasses("");
  };

  const scrollNavigate = (target) => {
    navigate("#" + target);
  };

  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand
              className="mr-lg-5"
              // to="/"
              tag={Link}
              onClick={() => navigate("/#")}
            >
              <img
                alt="..."
                className="img-fluid"
                src={require("assets/img/brand/logo_white.webp")}
                style={{ height: "50px" }}
              />
            </NavbarBrand>
            <button className="navbar-toggler" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src={require("assets/img/brand/logo_main.webp")}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    onClick={() => navigate("/#about")}
                  >
                    <span className="nav-link-inner--text ml-2">About</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    onClick={() => navigate("/#projects")}
                  >
                    <span className="nav-link-inner--text ml-2">
                      Our Projects
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    onClick={() => navigate("/#calendar")}
                  >
                    <span className="nav-link-inner--text ml-2">Calendar</span>
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://www.linkedin.com/company/ku-ieee/about/"
                    id="tooltip333589074"
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      LinkedIn
                    </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip333589074">
                    Follow us on LinkedIn
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://www.instagram.com/ku_ieee/"
                    id="tooltip356693867"
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Instagram
                    </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip356693867">
                    Follow us on Instagram
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="https://discord.gg/EgJgzb8NKM"
                    id="tooltip184698706"
                    target="_blank"
                  >
                    <i className="fa-brands fa-discord" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Discord
                    </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip184698706">
                    Join our Discord
                  </UncontrolledTooltip>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default LandingNavbar;
