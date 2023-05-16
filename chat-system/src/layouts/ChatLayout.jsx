import React, {useState} from "react";
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
import Avatar from "../components/avatar/Avatar.jsx";
import {BiUser, MdNotificationsNone, RiDeleteBin6Line} from "react-icons/all.js";
import {Outlet, useNavigate} from "react-router-dom";
import Settings from "../components/Settings.jsx";
import Contacts from "../components/Contacts.jsx";
import Chats from "../components/Chats.jsx";

ChatLayout.propTypes = {};

function ChatLayout(props) {
  const navigate = useNavigate();
  const [openUserProfile, setOpenUserProfile] = useState(false);
  const openSettings = () => {
    setOpenUserProfile(!openUserProfile);
  };
  return (
      <Container>
        <Row>
          <Col xs={4} className="bg-light border">
            <SearchBar openSettings={openSettings}/>
            <Chats/>
            <Contacts/>
            <Settings open={openUserProfile} toggle={openSettings} onClick={() => (navigate('/friends'))}/>
          </Col>
          <Outlet />
        </Row>
      </Container>
  );
}

export default ChatLayout;
