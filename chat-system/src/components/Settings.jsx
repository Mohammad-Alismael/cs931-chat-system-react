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
import React, { useContext, useEffect, useState } from "react";
import {
  BiUser,
  MdNotificationsNone,
  RiDeleteBin6Line,
} from "react-icons/all.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import GlobalContext from "../utils/context/globalContext.jsx";

function Settings(props) {
  const { user } = useContext(GlobalContext);
  console.log('user', user)

  const navigate = useNavigate();
  const [about, setAbout] = useState("");
  const [username,setUsername] = useState("")
  const logout = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:3000/users/${user.uid}`)
      .then((response) => {
        const user = response.data;
        const updatedData = { ...user, description: about };
        console.log('new description',about)
        console.log('updated data', updatedData)
        axios
          .put(`http://localhost:3000/users/${user.id}`, updatedData)
          .then((response) => {
            console.log("Updated user:", response.data);
            setAbout(response.data.description);
          })
          .catch((error) => {
            console.error("Error updating user:", error);
          });
      })
      .catch((error) => {
        console.error("Error retrieving user data:", error);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${user.uid}`)
      .then((response) => {
        const user = response.data;
        setUsername(user.displayName)
        const description = user.description;
        console.log("Description:", description);
        setAbout(description);
      })
      .catch((error) => {
        console.error("Error retrieving description:", error);
      });
  }, []);
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
            <b>{username}</b>
          </p>
          <FormGroup className="pt-3 pb-2">
            <Label for="exampleText">About</Label>
            <Input
              id="exampleText"
              name="text"
              type="textarea"
              placeholder={about}
              onChange={(e)=>(setAbout(e.target.value))}
            />
            <Button className="mt-4" onClick={handleUpdate}>
              update
            </Button>
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
        <Button className="mt-4" onClick={logout}>
          Logout
        </Button>
      </OffcanvasBody>
    </Offcanvas>
  );
}

Settings.propTypes = {
  open: PropTypes.bool,
  toggle: PropTypes.func,
  onClick: PropTypes.func,
};

export default Settings;
