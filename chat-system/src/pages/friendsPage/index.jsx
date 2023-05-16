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

function FriendsTab({ data }) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredDropdownItems = data.filter((item) =>
    item.username.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <Row>
      <Row className="my-4 mx-1">
        <Input
          onChange={handleSearch}
          className="m-0 border-1"
          style={{ width: "99%" }}
          type="text"
          placeholder="Type your Friend's username ..."
        />
      </Row>
      <Row className="mx-1" style={{ alignContent: 'flex-start',height: "480px", overflowY: "scroll" }}>
        {filteredDropdownItems.map(({ username }, index) => {
          return <Friend.Accepted key={index} username={username} />;
        })}
      </Row>
    </Row>
  );
}

function FriendsPage(props) {
  const [activeTab, setActiveTab] = useState("1");
  const [accpetedFriendRequest, setAccpetedFriendRequest] = useState([
    {
      username: "mhd",
    },
    {
      username: "ahmed",
    },
    {
      username: "zak",
    },
  ]);
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
                  <Button
                    style={{
                      background: "linear-gradient(to right, #f84a00, #fdce00)",
                      border: "none",
                    }}
                  >
                    Add Friend
                  </Button>
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
          <FriendsTab data={accpetedFriendRequest} />
        </TabPane>

        <TabPane tabId="3">
          <Row>
            <Col>
              <h3>Coming soon, we are working on it</h3>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </Container>
  );
}

export default FriendsPage;
