import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  ListGroup,
  ListGroupItem,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Row,
} from "reactstrap";
import SearchBar from "./components/SearchBar.jsx";
import UserChatCard from "../../components/userCards/UserChatCard.jsx";
import ChatHeader from "./components/ChatHeader.jsx";
import SendBar from "./components/SendBar.jsx";
import styles from "./page.module.css";
import ChatBody from "./components/chatBody/ChatBody.jsx";
import Avatar from "../../components/avatar/Avatar.jsx";
import {BiUser, FaEnvelope, FaUser, MdNotificationsNone, RiDeleteBin6Line} from "react-icons/all.js";
import {useNavigate} from "react-router-dom";

ChatPage.propTypes = {};

function Chats() {
  return (
    <Row>
      <h4 className={styles.header}>Chats</h4>
      <Col style={{ height: "195px", overflowY: "scroll" }}>
        <UserChatCard />
        <UserChatCard />
        <UserChatCard />
        <UserChatCard />
        <UserChatCard />
        <UserChatCard />
      </Col>
    </Row>
  );
}

function Contacts() {
  return (
    <Row>
      <h4 className={styles.header}>Contacts</h4>
      <Col style={{ height: "250px", overflowY: "scroll" }}>
        <UserChatCard />
        <UserChatCard />
        <UserChatCard />
        <UserChatCard />
        <UserChatCard />
        <UserChatCard />
      </Col>
    </Row>
  );
}

function ChatPage(props) {
  const navigate = useNavigate();
  const [openUserProfile, setOpenUserProfile] = useState(false);
  const openSettings = () => {
    setOpenUserProfile(!openUserProfile);
  };
  return (
    <Container>
      <Row>
        <Col xs={4} className="bg-light border">
          <SearchBar openSettings={openSettings} />
          <Chats />
          <Contacts />
          <Offcanvas isOpen={openUserProfile} toggle={openSettings}>
            <OffcanvasHeader toggle={openSettings}>
              User Settings
            </OffcanvasHeader>
            <OffcanvasBody>
              <div>
                <Avatar className="pr-2" imageUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
                <p className='d-inline-block mx-3'><b>Gavin Griffith</b></p>
                <FormGroup className="pt-3 pb-2">
                  <Label for="exampleText">About</Label>
                  <Input id="exampleText" name="text" type="textarea" />
                </FormGroup>
              </div>
              <div>
                <h5>Settings</h5>
                <ListGroup flush>
                  <ListGroupItem>
                    <MdNotificationsNone size={25} className="mr-2" />
                    <sapn className="px-2">Notification</sapn>
                  </ListGroupItem>
                  <ListGroupItem onClick={()=>(navigate('/friends'))}>
                    <BiUser size={25} />
                    <sapn className="px-2">Invite Friends</sapn>
                  </ListGroupItem>
                  <ListGroupItem>
                    <RiDeleteBin6Line size={25} />
                    <sapn className="px-2">Delete Account</sapn>
                  </ListGroupItem>
                </ListGroup>
              </div>
              <Button className="mt-4">Logout</Button>
            </OffcanvasBody>
          </Offcanvas>
        </Col>
        <Col xs={8} className="bg-light border">
          <Row>
            <Col xs={12} style={{ background: "rgb(238, 238, 238)" }}>
              <ChatHeader />
            </Col>
          </Row>
          <Row>
            <Col xs={12} style={{ background: "rgb(238, 238, 238)" }}>
              <ChatBody />
            </Col>
          </Row>
          <Row>
            <Col xs={12} style={{ background: "rgb(238, 238, 238)" }}>
              <SendBar />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ChatPage;
