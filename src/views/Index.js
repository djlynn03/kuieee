import React, { useRef, useEffect } from "react";

// reactstrap components
import {
  Carousel,
  CarouselCaption,
  Container,
  Row,
  UncontrolledCarousel,
} from "reactstrap";
import { Calendar } from "views/IndexSections/Calendar.js";

// core components
import LandingNavbar from "components/Navbars/LandingNavbar.js";

// index page sections
import Hero from "./IndexSections/Hero.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import { useLocation } from "react-router-dom";
import { About } from "./IndexSections/About.js";
import { Projects } from "./IndexSections/Projects.js";

// import { withRouter } from "react-router-dom";

// class Index extends React.Component {
function Index(props) {
  const mainRef = useRef();
  const location = useLocation();

  const setScrollPos = () => {
    if (window.location.href.includes("#calendar")) {
      document
        .getElementById("calendar")
        .scrollIntoView({ behavior: "smooth" });
    } else if (window.location.href.includes("#about")) {
      document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    } else if (window.location.href.includes("#projects")) {
      document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
    } else {
      document.getElementById("home").scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    setScrollPos();
  }, [location]);

  useEffect(() => {
    setScrollPos();
  }, []);

  return (
    <>
      <LandingNavbar />
      <main ref={mainRef} id="home">
        <Hero />
        <About />
        <hr />
        <Projects />
        <hr />
        <Calendar id="calendar" />
      </main>
      <SimpleFooter />
    </>
  );
}
// }

export default Index;
