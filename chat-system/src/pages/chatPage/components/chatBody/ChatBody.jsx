import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./ChatBody.module.css";
import Sender from "../../../../components/messageContainer/sender/sender.jsx";
import Recipient from "../../../../components/messageContainer/recipient/recipient.jsx";
import GlobalContext from "../../../../utils/context/globalContext.jsx";
import { getMessagesByConversationId } from "../../../../lib/messages.js";
import { useParams } from "react-router-dom";
ChatBody.propTypes = {};

function ChatBody({messages}) {
  console.log('messages', messages)
  const { user } = useContext(GlobalContext);


  return (
    <div className={styles.container}>
      {messages.map((val, i) => {
        if (val.sender_id == user.uid)
          return <Sender key={val.id} text={val.text} />;
        else
          return <Recipient key={val.id} text={val.text} />;
      })}
    </div>
  );
}

export default ChatBody;
