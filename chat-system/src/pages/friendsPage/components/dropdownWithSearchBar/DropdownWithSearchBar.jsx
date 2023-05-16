import React, { useState } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import styles from "./dropdownWithSearchBar.module.css";
import Avatar from "../../../../components/avatar/Avatar.jsx";

const DropdownWithSearchBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const dropdownItems = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
  ];

  const filteredDropdownItems = dropdownItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
      />
      {searchTerm !== '' ? (
        <div className={styles.searchContainer}>
          {
            filteredDropdownItems.map((val,index)=>{
              return (
                  <div className="d-flex align-items-center bg-light p-1 rounded" style={{ width: '100%' }}>
                    <Avatar imageUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
                    <span className='px-3'>{val.name}</span>
                  </div>
              )
            })
          }

        </div>
      ) : null}
    </>
  );
};

export default DropdownWithSearchBar;
