import React, { useEffect, useRef, useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

// core components
import LandingNavbar from "components/Navbars/LandingNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import { Navigate } from "react-router-dom";

export function Login(props) {
  const [user, setUser] = useState(props.user);
  const emailRef = useRef();
  const pwdRef = useRef();

  function signInSubmit(event) {
    const email = event.currentTarget.form[0].value;
    const password = event.currentTarget.form[1].value;
    const remember = event.currentTarget.form[2].checked;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const newUser = userCredential.user;
        setUser(newUser);
        props.setUser(newUser);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  const auth = getAuth();
  onAuthStateChanged(auth, (newUser) => {
    if (newUser) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      setUser(newUser);
      props.setUser(newUser);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  return (
    <>
      <Row className="justify-content-center">
        <Col lg="5">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5">
              <div className="h2 text-center mb-3">
                <small>Sign in</small>
              </div>
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      innerRef={emailRef}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      autoComplete="off"
                      ref={pwdRef}
                    />
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span>Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button
                    className="my-4"
                    color="primary"
                    type="submit"
                    onClick={(e) => signInSubmit(e)}
                  >
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <small>Forgot password?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <small>Contact an administrator</small>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* </Container>
          </section>
        </main>
        <SimpleFooter /> */}
    </>
  );
}

export default Login;
