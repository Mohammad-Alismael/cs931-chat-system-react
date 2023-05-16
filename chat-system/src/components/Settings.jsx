import {
  Button,
  FormGroup,
  Input,
  Label,
  ListGroup,
  ListGroupItem,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
} from "reactstrap";
import Avatar from "./avatar/Avatar.jsx";
import PropTypes from "prop-types";
import React from "react";
import {
  BiUser,
  MdNotificationsNone,
  RiDeleteBin6Line,
} from "react-icons/all.js";

function Settings(props) {
  return (
    <Offcanvas isOpen={props.open} toggle={props.toggle}>
      <OffcanvasHeader toggle={props.toggle}>User Settings</OffcanvasHeader>
      <OffcanvasBody>
        <div>
          <Avatar
            className="pr-2"
            imageUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          />
          <p className="d-inline-block mx-3">
            <b>Gavin Griffith</b>
          </p>
          <FormGroup className="pt-3 pb-2">
            <Label for="exampleText">About</Label>
            <Input id="exampleText" name="text" type="textarea" />
          </FormGroup>
        </div>
        <div>
          <h5>Settings</h5>
          <ListGroup flush>
            <ListGroupItem>
              <MdNotificationsNone size={25} className="mr-2" />
              <sapn className="px-2">Notification</sapn>
            </ListGroupItem>
            <ListGroupItem onClick={props.onClick}>
              <BiUser size={25} />
              <sapn className="px-2">Invite Friends</sapn>
            </ListGroupItem>
            <ListGroupItem>
              <RiDeleteBin6Line size={25} />
              <sapn className="px-2">Delete Account</sapn>
            </ListGroupItem>
          </ListGroup>
        </div>
        <Button className="mt-4">Logout</Button>
      </OffcanvasBody>
    </Offcanvas>
  );
}

Settings.propTypes = {
  open: PropTypes.bool,
  toggle: PropTypes.func,
  onClick: PropTypes.func,
};

export default Settings
