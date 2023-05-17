import React, {useContext, useState} from "react";
import { BsSearch, BsThreeDotsVertical, BsCameraVideo } from "react-icons/bs";
import { HiMenuAlt2, IoCallOutline } from "react-icons/all.js";
import Avatar from "../../../../components/avatar/Avatar.jsx";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import GlobalContext from "../../../../utils/context/globalContext.jsx";

function ChatHeader(props) {
  const {toggleDrawer} = useContext(GlobalContext)

  const [isOpen, setIsOpen] = React.useState(false);
  const [open,setOpen] = useState(false)
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="d-flex align-items-center justify-content-between mt-2 border-bottom pb-2">
      <div className="d-flex align-items-center">
        <div className="d-block d-sm-none px-2">
          <HiMenuAlt2 size={25} onClick={toggleDrawer}/>
        </div>
        <Avatar imageUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
        <div
          className="d-inline-block pl-2"
          style={{ textAlign: "left", paddingLeft: "1rem" }}
        >
          <p className="p-0 m-0 text-left">
            <b>Gavin Griffith</b>
          </p>
          <span className="p-0 m-0">online</span>
        </div>
      </div>
      <div className="d-none d-sm-flex align-items-center gap-3">
        <IoCallOutline size={23} />
        <BsCameraVideo size={25} />
        <BsSearch size={23} />
        <Dropdown
          isOpen={isOpen}
          toggle={toggleDropdown}
        >
          <DropdownToggle style={{ backgroundColor: "transparent", border: 'none' }}>
            <BsThreeDotsVertical size={23} color='#000'/>
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              <IoCallOutline size={23} /> voice call
            </DropdownItem>
            <DropdownItem>
              <BsCameraVideo size={25} /> video call
            </DropdownItem>
            <DropdownItem>
              <BsSearch size={23} /> Search
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
}

export default ChatHeader;
