import React from 'react';
import PropTypes from 'prop-types';
import {Col, Container, Row} from "reactstrap";

ChatPage.propTypes = {

};

function ChatPage(props) {
    return (
        <Container>
            <Row>
                <Col xs={4} className="bg-light border">
                    .col-4
                </Col>
                <Col xs={8} className="bg-light border">
                    .col-8
                </Col>
            </Row>
        </Container>
    );
}

export default ChatPage;