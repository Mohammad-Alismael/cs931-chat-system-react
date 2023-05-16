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
import {
  BiUser,
  FaEnvelope,
  FaUser,
  MdNotificationsNone,
  RiDeleteBin6Line,
} from "react-icons/all.js";
import {useNavigate, useParams} from "react-router-dom";
import ChatHeader from "./components/chatHeader/ChatHeader.jsx";
import ChatBody from "./components/chatBody/ChatBody.jsx";
import SendBar from "./components/SendBar.jsx";

ChatPage.propTypes = {};

function ChatPage(props) {
  const {chat_id} = useParams()
  alert(chat_id)
  return (
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
  );
}

export default ChatPage;
