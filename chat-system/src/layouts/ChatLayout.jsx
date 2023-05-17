import React, { useContext, useState } from "react";
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
import SearchBar from "../pages/chatPage/components/SearchBar.jsx";
import { Outlet, useNavigate } from "react-router-dom";
import Settings from "../components/Settings.jsx";
import Contacts from "../components/Contacts.jsx";
import GlobalContext from "../utils/context/globalContext.jsx";
import Drawer from "../components/drawer/Drawer.jsx";
import Chats from "../components/chats/Chats.jsx";

ChatLayout.propTypes = {};

function ChatLayout(props) {
  const { isOpen, openUserProfile, toggleSettings } = useContext(GlobalContext);
  const navigate = useNavigate();
  return (
    <Container>
      <Row>
        <Col
          xs={0}
          sm={4}
          md={4}
          lg={4}
          xl={4}
          xxl={4}
          className="d-none d-sm-block bg-light border"
        >
          <SearchBar openSettings={toggleSettings} />
          <Chats />
          <Contacts />
          <Settings
            open={openUserProfile}
            toggle={toggleSettings}
            onClick={() => navigate("/friends")}
          />
        </Col>
        <Col
          xs={12}
          sm={8}
          md={8}
          lg={8}
          xl={8}
          xxl={8}
          className="bg-light border"
        >
          <Outlet />
          <Drawer />
        </Col>
      </Row>
    </Container>
  );
}

export default ChatLayout;
