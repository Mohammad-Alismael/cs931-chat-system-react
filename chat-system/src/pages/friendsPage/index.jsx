import React, { useContext, useEffect, useState } from "react";
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
import {
  acceptFriendRequest,
  createFriendRequest,
  deleteFriendRequest,
  fetchAcceptedFriendRequests,
  getFriendRequestsByUserId,
  rejectFriendRequest,
} from "../../lib/friendRequests.js";
import GlobalContext from "../../utils/context/globalContext.jsx";

FriendsPage.propTypes = {};

function FriendsTab() {
  const { user } = useContext(GlobalContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState([]);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredDropdownItems = requests?.filter((item) =>
    item.user.displayName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchData() {
      setLoading(true);
      try {
        let data = await fetchAcceptedFriendRequests(
          user.uid,
          abortController.signal
        );
        console.log("accepted friend request", data);
        setRequests(data);
        setLoading(false);
      } catch (error) {
        if (error.name === "AbortError") {
          // Request was aborted, handle it here
        } else {
          // Handle other errors here
        }
      }
    }

    fetchData().then(console.log);

    return () => {
      abortController.abort();
    };
  }, []);
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
      <Row
        className="mx-1"
        style={{
          alignContent: "flex-start",
          height: "480px",
          overflowY: "scroll",
        }}
      >
        {filteredDropdownItems.map(({ user }, index) => {
          return <Friend.Accepted key={index} username={user.displayName} />;
        })}
      </Row>
    </Row>
  );
}

function FriendsPage(props) {
  const { user } = useContext(GlobalContext);
  const [activeTab, setActiveTab] = useState("1");
  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const makeFriendRequest = () => {
    createFriendRequest(user.uid, selectedUser.id).then((data) => {
      setSelectedUser(null);
      setRequests({
        ...requests,
        sentRequests: [...requests.sentRequests, data],
      });
    });
  };

  const handDeleteRequest = (id) => {
    deleteFriendRequest(id).then((data) => {
      const newSentRequests = requests.sentRequests.filter((item) => {
        return item.id !== id;
      });
      setRequests({
        ...requests,
        sentRequests: [...newSentRequests],
      });
    });
  };

  const handleAcceptRequest = (id) => {
    acceptFriendRequest(id).then((data) => {
      const newReceivedRequests = requests.receivedRequests.filter((item) => {
        return item.id !== id;
      });
      setRequests({
        ...requests,
        receivedRequests: [...newReceivedRequests],
      });
    });
  };
  const handleRejectRequest = (id) => {
    rejectFriendRequest(id).then((data) => {
      const newReceivedRequests = requests.receivedRequests.filter((item) => {
        return item.id !== id;
      });
      setRequests({
        ...requests,
        receivedRequests: [...newReceivedRequests],
      });
    });
  };

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchData() {
      setLoading(true);
      try {
        let data = await getFriendRequestsByUserId(
          user.uid,
          "pending",
          abortController.signal
        );
        console.log("pending friend request", data);
        setRequests(data);
        setLoading(false);
      } catch (error) {
        if (error.name === "AbortError") {
          // Request was aborted, handle it here
        } else {
          // Handle other errors here
        }
      }
    }

    fetchData().then(console.log);

    return () => {
      abortController.abort();
    };
  }, []);

  if (loading) return <p style={{ color: "#fff" }}>loading ...</p>;
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
            Received Requests
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col>
              <Row className="my-2 p-2">
                <Col xs={7} md={10}>
                  <DropdownWithSearchBar onSelect={setSelectedUser} />
                </Col>
                <Col xs={5} md={2} className="d-flex align-items-center">
                  <Button
                    onClick={makeFriendRequest}
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
                style={{
                  height: "480px",
                  overflowY: "scroll",
                  alignContent: "flex-start",
                }}
              >
                {requests?.sentRequests.map((val, i) => {
                  return (
                    <Friend.Sender
                      key={i}
                      data={val}
                      handleDelete={handDeleteRequest}
                    />
                  );
                })}
              </Row>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <FriendsTab />
        </TabPane>

        <TabPane tabId="3">
          <Row
            className="mx-1"
            style={{
              height: "480px",
              overflowY: "scroll",
              alignContent: "flex-start",
              padding: "1rem",
            }}
          >
            {requests?.receivedRequests.map((val, i) => {
              return (
                <Friend.Recipient
                  key={i}
                  data={val}
                  handleAccept={handleAcceptRequest}
                  handleReject={handleRejectRequest}
                />
              );
            })}
          </Row>
        </TabPane>
      </TabContent>
    </Container>
  );
}

export default FriendsPage;
