import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Col,
  Container,
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

ChatPage.propTypes = {};

function Chats() {
  return (
    <Row>
      <h4 className={styles.header}>Chats</h4>
      <Col style={{height: '195px',overflowY: 'scroll'}}>
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
      <Col style={{height: '250px',overflowY: 'scroll'}}>
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
  const [openUserProfile, setOpenUserProfile] = useState(false);
  return (
    <Container>
      <Row>
        <Col xs={4} className="bg-light border">
          <SearchBar />
          <Chats />
          <Contacts />
        </Col>
        <Col xs={8} className="bg-light border">
          <Row>
            <Col xs={12} style={{background: 'rgb(238, 238, 238)'}}>
              <ChatHeader />
            </Col>
          </Row>
          <Row>
            <Col xs={12} style={{background: 'rgb(238, 238, 238)'}}>
              <ChatBody />
            </Col>
          </Row>
          <Row>
            <Col xs={12} style={{background: 'rgb(238, 238, 238)'}}>
              <SendBar />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ChatPage;
