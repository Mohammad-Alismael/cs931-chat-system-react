import React from "react";
import PropTypes from "prop-types";
import Avatar from "../../../../components/avatar/Avatar.jsx";
import { Button } from "reactstrap";
import {acceptFriendRequest, deleteFriendRequest, rejectFriendRequest} from "../../../../lib/friendRequests.js";

Friend.propTypes = {};
const buttonStyle = {
  // background: "linear-gradient(to right, #f84a00, #fdce00)",
  background: "#f84a00",
  border: "none", // Optional: Remove border
  boxShadow: "none", // Optional: Remove box shadow
  transition: "background-color 0.5s ease-in-out", // Smooth transition on hover
};
function Friend({data}) {
  const  {
    id,
    sender,
    recipient,
    status,
  } = data
  return (
    <div
      className="d-flex align-items-center justify-content-between rounded my-1 p-2"
      style={{ background: "#F5F5F5", height: '55px' }}
    >
      <div className="d-flex align-items-center">
        <Avatar imageUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
        <div className="px-4">
          <p className="m-0 p-0">
            <b>mohammad alismael</b>
          </p>
          <p className="m-0 p-0">mutual friends</p>
        </div>
      </div>

      <div className="d-flex gap-3">
        <Button size="sm" style={buttonStyle}>
          Confirm
        </Button>
        <Button
          size="sm"
          style={{
            color: "#000",
            background: "rgba(229,229,235,1)",
            borderColor: "rgba(229,229,235,1)",
          }}
        >
          Remove
        </Button>
      </div>
    </div>
  );
}
const Sender = ({data, handleDelete}) => {
  const  {
    id,
    sender,
    recipient,
    status,
  } = data
  return (
      <div
          className="d-flex align-items-center justify-content-between rounded my-1 p-2"
          style={{ background: "#F5F5F5", height: '55px' }}
      >
        <div className="d-flex align-items-center">
          <Avatar imageUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
          <div className="px-4">
            <p className="m-0 p-0">
              <b>{recipient.displayName}</b>
            </p>
            <p className="m-0 p-0">mutual friends</p>
          </div>
        </div>

        <div className="d-flex gap-3">
          <Button size="sm" style={buttonStyle} onClick={()=>(handleDelete(id))}>
            Cancel
          </Button>
        </div>
      </div>
  );
}

const Recipient = ({data,handleAccept,handleReject}) => {
  const  {
    id,
    sender,
    recipient,
    status,
  } = data;

  return (
      <div
          className="d-flex align-items-center justify-content-between rounded my-1 p-2"
          style={{ background: "#F5F5F5", height: '55px' }}
      >
        <div className="d-flex align-items-center">
          <Avatar imageUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
          <div className="px-4">
            <p className="m-0 p-0">
              <b>{sender.displayName}</b>
            </p>
            <p className="m-0 p-0">mutual friends</p>
          </div>
        </div>

        <div className="d-flex gap-3">
          <Button size="sm" style={buttonStyle} onClick={()=>(handleAccept(id))}>
            Confirm
          </Button>
          <Button
              size="sm"
              style={{
                color: "#000",
                background: "rgba(229,229,235,1)",
                borderColor: "rgba(229,229,235,1)",
              }}
              onClick={()=>(handleReject(id))}
          >
            Remove
          </Button>
        </div>
      </div>
  );
}
const Accepted = ({ username }) => {
  return (
    <div
      className="d-flex align-items-center justify-content-between rounded my-1 p-2"
      style={{ background: "#F5F5F5", height: '55px' }}
    >
      <div className="d-flex align-items-center">
        <Avatar imageUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
        <div className="px-4">
          <p className="m-0 p-0">
            <b>{username}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

Friend.Accepted = Accepted;
Friend.Sender = Sender;
Friend.Recipient = Recipient;
export default Friend;
