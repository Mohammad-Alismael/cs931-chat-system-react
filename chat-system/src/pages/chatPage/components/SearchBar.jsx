import React, {useContext} from "react";
import PropTypes from "prop-types";
import Avatar from "../../../components/avatar/Avatar.jsx";
import { Input } from "reactstrap";
import GlobalContext from "../../../utils/context/globalContext.jsx";
import {HiMenuAlt2, IoCloseSharp} from "react-icons/all.js";
function SearchBar({ openSettings }) {
    const { toggleDrawer, isOpen } = useContext(GlobalContext);

    return (
    <div className="d-flex align-items-center justify-content-between gap-3 mt-2">
      <div onClick={openSettings}>
        <Avatar imageUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
      </div>
      <Input placeholder="Search ..." />
        <div className="d-block d-sm-none px-2">
            <IoCloseSharp size={30} onClick={toggleDrawer}/>
        </div>
    </div>
  );
}

export default SearchBar;
