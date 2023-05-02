import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "reactstrap";

SendBar.propTypes = {

};

function SendBar(props) {
    return (
        <div>
            <input type='text' placeholder='Type your message...'/>
            <Button>send</Button>
        </div>
    );
}

export default SendBar;