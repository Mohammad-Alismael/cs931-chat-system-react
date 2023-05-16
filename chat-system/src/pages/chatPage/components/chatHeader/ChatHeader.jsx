import React from "react";
import { BsSearch, BsThreeDotsVertical, BsCameraVideo } from "react-icons/bs";
import {IoCallOutline} from "react-icons/all.js";
import Avatar from "../../../../components/avatar/Avatar.jsx";

function ChatHeader(props) {
  return (
    <div className="d-flex align-items-center justify-content-between mt-2 border-bottom pb-2">
      <div className="d-flex align-items-center">
        <Avatar imageUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
        <div
          className="d-inline-block pl-2"
          style={{ textAlign: "left", paddingLeft: "1rem" }}
        >
          <p className="p-0 m-0 text-left"><b>Gavin Griffith</b></p>
          <span className="p-0 m-0">online</span>
        </div>
      </div>
      <div className="d-flex gap-3">
        <IoCallOutline size={23} />
        <BsCameraVideo size={25} />
        <BsSearch size={23} />
        <BsThreeDotsVertical size={23} />
      </div>
    </div>
  );
}

export default ChatHeader;