import React from "react";
import PropTypes from "prop-types";
import { Button, Input } from "reactstrap";
import { BsMic, BsUpload } from "react-icons/bs";

SendBar.propTypes = {};

function SendBar(props) {
  return (
    <div className="d-flex align-items-center justify-content-around gap-3">
      <Input type="text" placeholder="Type your message..." />
        <BsMic size={35} />
        <BsUpload size={35} />
      <Button>send</Button>
    </div>
  );
}

export default SendBar;
