import React, { useState } from "react";

import Login from "views/examples/Login";
import LandingNavbar from "components/Navbars/LandingNavbar";

import { Container } from "reactstrap";
import { Dashboard } from "./Dashboard";
import SimpleFooter from "components/Footers/SimpleFooter";
import { getAuth } from "firebase/auth";

export function Admin(props) {
  const auth = getAuth();
  const [user, setUser] = useState(auth.currentUser);

  return (
    <>
      <LandingNavbar admin={true} />
      <main>
        <section className="section section-hero section-shaped min-vh-100">
          <div className="shape shape-style-1 shape-default"></div>
          <Container className="pt-3">
            {user ? <Dashboard user={user} /> : <Login setUser={setUser} />}
          </Container>
        </section>
      </main>
      <SimpleFooter />
    </>
  );
}
