import {Col, Row} from "reactstrap";
import styles from "../pages/chatPage/page.module.css";
import UserChatCard from "./userCards/UserChatCard.jsx";
import React from "react";

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

export default Contacts