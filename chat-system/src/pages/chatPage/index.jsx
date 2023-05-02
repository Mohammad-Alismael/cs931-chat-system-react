import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "reactstrap";
import SearchBar from "./components/SearchBar.jsx";
import UserChatCard from "../../components/userCards/UserChatCard.jsx";
import ChatHeader from "./components/ChatHeader.jsx";
import SendBar from "./components/SendBar.jsx";
import styles from "./page.module.css";

ChatPage.propTypes = {};

function ChatPage(props) {
  return (
    <Container>
      <Row>
        <Col xs={4} className="bg-light border">
          <SearchBar />
          <Row>
            <h4 className={styles.header}>Chats</h4>
            <Col>
              <UserChatCard />
              <UserChatCard />
              <UserChatCard />
            </Col>
          </Row>
          <Row>
            <h4 className={styles.header}>Contacts</h4>
            <Col>
              <UserChatCard />
              <UserChatCard />
              <UserChatCard />
            </Col>
          </Row>
        </Col>
        <Col xs={8} className="bg-light border">
          <Row>
            <ChatHeader />
          </Row>
          <Row>
            <ChatHeader />
          </Row>
          <Row>
            <SendBar />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ChatPage;
