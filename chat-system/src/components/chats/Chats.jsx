import { Col, Row } from "reactstrap";
import styles from "../../pages/chatPage/page.module.css";
import React from "react";
import UserChatCard from "../userCards/UserChatCard.jsx";

function Chats() {
  return (
    <Row>
      <h4 className={styles.header}>Chats</h4>
      <Col style={{ height: "195px", overflowY: "scroll" }}>
          {/*className={styles.scrollContainer}*/}
        <div >
          <UserChatCard />
          <UserChatCard />
          <UserChatCard />
          <UserChatCard />
          <UserChatCard />
          <UserChatCard />
        </div>
      </Col>
    </Row>
  );
}

export default Chats;
