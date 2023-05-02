import React from "react";
import PropTypes from "prop-types";
import Avatar from "../../../components/avatar/Avatar.jsx";
import { Input } from "reactstrap";
function SearchBar(props) {
  return (
    <div className='d-flex align-items-center justify-content-around gap-3 mt-2'>
      <Avatar imageUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
      <Input placeholder="Search ..." />
    </div>
  );
}

export default SearchBar;