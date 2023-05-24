import React, {useContext, useEffect, useState} from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import ChatHeader from "./components/chatHeader/ChatHeader.jsx";
import ChatBody from "./components/chatBody/ChatBody.jsx";
import SendBar from "./components/SendBar.jsx";
import {fetchChatsByChatIdAndUserId} from "../../lib/chats.js";
import GlobalContext from "../../utils/context/globalContext.jsx";
import {createMessage, getMessagesByConversationId} from "../../lib/messages.js";

ChatPage.propTypes = {};

function ChatPage(props) {
  const { user } = useContext(GlobalContext);
  const { chat_id } = useParams();
  const [username,setUsername] = useState("")
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  const postMessage = (text) => {
    createMessage(chat_id,user.uid,text,new Date().toISOString()).then((data)=>{
      console.log(data)
      setMessages([...messages, data])
    })
    // const messageObject = {
    //   sender_id: user.uid,
    //   text,
    //   id: Date.now(),
    //   created_at: new Date().toISOString()
    // }


  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const chats = await fetchChatsByChatIdAndUserId(chat_id, user.uid);
        // Do something with the retrieved chats
        console.log(chats);
        setUsername(chats[0]['participants'][0]['displayName'])
        setLoading(false)
      } catch (error) {
        console.error("Error fetching chats:", error);
        setLoading(false)
      }
    };

    const fetchDatav2 = async () => {
      try {
        const data = await getMessagesByConversationId(chat_id);
        console.log('messages', data)
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchData().then();
    fetchDatav2().then();
  }, [chat_id, user.uid]);
  if (loading) return <p>Loading ...</p>
  return (
    <div>
      <Row>
        <Col xs={12} style={{ background: "rgb(238, 238, 238)" }}>
          <ChatHeader username={username}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} style={{ background: "rgb(238, 238, 238)" }}>
          <ChatBody messages={messages}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} style={{ background: "rgb(238, 238, 238)" }}>
          <SendBar send={postMessage}/>
        </Col>
      </Row>
    </div>
  );
}

export default ChatPage;
