import React from "react";
import Avatar from "../../../components/avatar/Avatar.jsx";
import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";

function ChatHeader(props) {
  return (
    <div className="d-flex align-items-center justify-content-between mt-2">
      <div className="d-flex align-items-center">
        <Avatar imageUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
        <div className="d-inline-block text-left pl-2">
          <p className="p-0 m-0 text-left">Gavin Griffith</p>
          <span className="p-0 m-0">online</span>
        </div>
      </div>
      <div className="d-flex gap-3">
        <BsSearch />
        <BsThreeDotsVertical />
      </div>
    </div>
  );
}

export default ChatHeader;
