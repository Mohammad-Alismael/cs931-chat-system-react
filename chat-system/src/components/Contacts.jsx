import { Col, Row } from "reactstrap";
import styles from "../pages/chatPage/page.module.css";
import UserChatCard from "./userCards/UserChatCard.jsx";
import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../utils/context/globalContext.jsx";
import { fetchChatsByUserId } from "../lib/chats.js";
import { getContacts } from "../lib/contacts.js";
import {AppContext} from "../utils/context/AppContext.jsx";

function Contacts(props) {
    const { contacts } = useContext(AppContext);
    return (
    <Row>
      <h4 className={styles.header}>Contacts</h4>
      <Col style={{ height: "250px", overflowY: "scroll" }}>
        {contacts.length !== 0 && contacts.map((val, i) => {
          return (
            <UserChatCard.Contact key={i} userObject={val} />
          );
        })}
          {contacts.length === 0 ? <UserChatCard.Empty /> : null}

      </Col>
    </Row>
  );
}

export default Contacts;
