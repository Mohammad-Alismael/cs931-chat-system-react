import React from "react";
import PropTypes from "prop-types";
import styles from "./ChatBody.module.css";
import Sender from "../../../../components/messageContainer/sender/sender.jsx";
import Recipient from "../../../../components/messageContainer/recipient/recipient.jsx";
ChatBody.propTypes = {};

function ChatBody(props) {
  return (
    <div className={styles.container}>
      <Sender />
      <Sender />
      <Sender />
      <Recipient />
      <Recipient />
      <Sender />
      <Sender />
      <Sender />
      <Sender />
      <Recipient />
      <Recipient />
      <Sender />
      <Sender />
      <Sender />
      <Sender />
      <Recipient />
      <Recipient />
      <Sender />
    </div>
  );
}

export default ChatBody;
