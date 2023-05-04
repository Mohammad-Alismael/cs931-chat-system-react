import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Col,
  Container,
  Input,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  Table,
  TabPane,
} from "reactstrap";
import Friend from "./components/Friend/Friend.jsx";
import DropdownWithSearchBar from "./components/dropdownWithSearchBar/DropdownWithSearchBar.jsx";

FriendsPage.propTypes = {};

function FriendsPage(props) {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <Container>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={activeTab == "1" ? "active" : ""}
            onClick={() => setActiveTab("1")}
          >
            Friend Requests
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab == "2" ? "active" : ""}
            onClick={() => setActiveTab("2")}
          >
            Friends
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab == "3" ? "active" : ""}
            onClick={() => setActiveTab("3")}
          >
            Friends you may know
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <Row className="my-2 p-2">
                <Col xs={10}>
                  <DropdownWithSearchBar />
                </Col>
                <Col xs={2} className="d-flex align-items-center">
                  <Button>Add Friend</Button>
                </Col>
              </Row>
              <Row
                className="mx-1"
                style={{ height: "480px", overflowY: "scroll" }}
              >
                <Friend />
                <Friend />
                <Friend />
                <Friend />
                <Friend />
                <Friend />
                <Friend />
                <Friend />
                <Friend />
                <Friend />
                <Friend />
                <Friend />
              </Row>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </Container>
  );
}

export default FriendsPage;
