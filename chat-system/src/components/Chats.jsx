import {Col, Row} from "reactstrap";
import styles from "../pages/chatPage/page.module.css";
import UserChatCard from "./userCards/UserChatCard.jsx";
import React from "react";

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
export default Chats;