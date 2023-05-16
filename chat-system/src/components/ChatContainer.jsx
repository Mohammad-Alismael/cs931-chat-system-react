import {Col, Row} from "reactstrap";
import ChatBody from "../pages/chatPage/components/chatBody/ChatBody.jsx";
import SendBar from "../pages/chatPage/components/SendBar.jsx";
import React from "react";
import ChatHeader from "../pages/chatPage/components/chatHeader/ChatHeader.jsx";

function ChatContainer() {
    return <Col xs={8} className="bg-light border">
        <Row>
            <Col xs={12} style={{background: "rgb(238, 238, 238)"}}>
                <ChatHeader/>
            </Col>
        </Row>
        <Row>
            <Col xs={12} style={{background: "rgb(238, 238, 238)"}}>
                <ChatBody/>
            </Col>
        </Row>
        <Row>
            <Col xs={12} style={{background: "rgb(238, 238, 238)"}}>
                <SendBar/>
            </Col>
        </Row>
    </Col>;
}

export default ChatContainer;