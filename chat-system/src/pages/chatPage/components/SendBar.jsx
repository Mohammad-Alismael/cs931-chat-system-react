import React from "react";
import PropTypes from "prop-types";
import { Button, Input } from "reactstrap";
import { BsMic, BsUpload } from "react-icons/bs";

SendBar.propTypes = {};
const buttonStyle = {
  background: "linear-gradient(to right, #f84a00, #fdce00)",
  border: "none", // Optional: Remove border
  boxShadow: "none", // Optional: Remove box shadow
  transition: "background-color 0.5s ease-in-out", // Smooth transition on hover
};

const buttonHoverStyle = {
  background: "linear-gradient(to right, #fdce00, #f84a00)", // Swap gradient colors
};

function SendBar(props) {
  return (
    <div
      className="d-flex align-items-center justify-content-around gap-3 p-2 m-2 rounded shadow"
      style={{ background: "rgb(255, 255, 255)" }}
    >
      <Input
        className="m-0 border-0"
        type="text"
        placeholder="Type your message..."
      />
      <BsMic size={35} />
      <BsUpload size={35} />
      <Button
        style={buttonStyle}
        onMouseEnter={() => {
          Object.assign(buttonStyle, buttonHoverStyle);
        }}
        onMouseLeave={() => {
          buttonStyle.background =
            "linear-gradient(to right, #f84a00, #fdce00)";
        }}
      >
        send
      </Button>
    </div>
  );
}

export default SendBar;
