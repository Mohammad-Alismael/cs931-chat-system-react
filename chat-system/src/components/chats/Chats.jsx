import { Col, Row } from "reactstrap";
import styles from "../../pages/chatPage/page.module.css";
import React, { useContext, useEffect, useState } from "react";
import UserChatCard from "../userCards/UserChatCard.jsx";
import {AppContext} from "../../utils/context/AppContext.jsx";

function Chats() {
    const { chats } = useContext(AppContext);
    return (
    <Row>
      <h4 className={styles.header}>Chats</h4>
      <Col style={{ height: "195px", overflowY: "scroll" }}>
        {/*className={styles.scrollContainer}*/}
        <div>
          {chats.length !== 0 && chats.map((val, i) => {
            console.log(val.participants[0])
            return <UserChatCard key={i} chatId={val.id} user={val.participants[0]}/>;
          })}
        </div>
      </Col>
    </Row>
  );
}

export default Chats;
