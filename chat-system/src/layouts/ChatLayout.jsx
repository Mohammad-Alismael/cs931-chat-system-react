import React, {
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
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
import { getContacts } from "../lib/contacts.js";
import { fetchChatsByUserId } from "../lib/chats.js";
import { AppContext, AppProvider } from "../utils/context/AppContext.jsx";

ChatLayout.propTypes = {};
function ChatLayout(props) {
  const { user } = useContext(GlobalContext);
  const { setContacts, setChats } = useContext(AppContext);

  const { isOpen, openUserProfile, toggleSettings } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Example action dispatches

  useEffect(() => {
    const fetchData = async () => {
      try {
        const chatData = await fetchChatsByUserId(user.uid);
        // const contactData = await getContacts(user.uid);
        // console.log({chatData, contactData})
        setChats(chatData);
        // setContacts(contactData);
        setLoading(true);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(true);
      }
    };

    fetchData().then(console.log);
  }, [navigate]);

  if (!loading) return <p style={{ color: "#fff" }}>loading ...</p>;
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
          {/*<Contacts />*/}
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
