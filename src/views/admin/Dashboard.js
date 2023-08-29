import React, { useState } from "react";
import classnames from "classnames";

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
  TabContent,
  Nav,
  NavItem,
  NavLink,
  TabPane,
} from "reactstrap";

import { Calendar } from "views/IndexSections/Calendar";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// export class Dashboard extends React.Component {
export function Dashboard(props) {
  const [tabs, setTabs] = useState(1);
  const navigate = useNavigate();

  function signUserOut() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Container className="bg-secondary pb-3 rounded">
      <Row className="p-3 d-flex justify-content-between align-items-center">
        Welcome, {props.user.email}
        <Button onClick={() => signUserOut()}>Sign Out</Button>
      </Row>
      <Nav
        className="nav-fill flex-column flex-sm-row"
        id="tabs-text"
        pills
        role="tablist"
      >
        <NavItem>
          <NavLink
            aria-selected={tabs === 1}
            className={classnames("mb-sm-3 mb-md-0", {
              active: tabs === 1,
            })}
            onClick={(e) => setTabs(1)}
            role="tab"
          >
            Events
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            aria-selected={tabs === 2}
            className={classnames("mb-sm-3 mb-md-0", {
              active: tabs === 2,
            })}
            onClick={(e) => setTabs(2)}
            role="tab"
          >
            Users
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            aria-selected={tabs === 3}
            className={classnames("mb-sm-3 mb-md-0", {
              active: tabs === 3,
            })}
            onClick={(e) => setTabs(3)}
            role="tab"
          >
            Misc
          </NavLink>
        </NavItem>
      </Nav>
      <Card className="shadow">
        <CardBody>
          <TabContent activeTab={"tabs" + tabs}>
            <TabPane tabId="tabs1">
              <Calendar admin={true} />{" "}
              {/* Create admin controls inside the calendar (plus icon button to create event, minus icon on each event for remove) */}
            </TabPane>
            <TabPane tabId="tabs2">
              <Button>Create a User</Button>
            </TabPane>
            <TabPane tabId="tabs3">
              Nothing yet! <i className="fa-regular fa-face-smile" />
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </Container>
  );
}
