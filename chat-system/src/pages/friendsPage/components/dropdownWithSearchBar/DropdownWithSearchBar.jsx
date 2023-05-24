import React, { useContext, useEffect, useState } from "react";
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
import axios from "axios";
import GlobalContext from "../../../../utils/context/globalContext.jsx";

const DropdownWithSearchBar = ({ onSelect }) => {
  const { user } = useContext(GlobalContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [clicked, setClicked] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSearch = (event) => {
    setClicked(false);
    setSearchTerm(event.target.value);
  };

  const [users, setUsers] = useState([]);

  const filteredDropdownItems = users.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onSelectUser = (user) => {
    // alert(user.name)
    setSearchTerm(user.name);
    onSelect(user);
    setClicked(!clicked);
  };

  useEffect(() => {
    const abortController = new AbortController();
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3000/users", {
          signal: abortController.signal,
        });
        console.log(response.data);
        setUsers(
          response?.data
            .filter(({ id }, i) => {
              return id !== user.uid;
            })
            .map((val, i) => {
              return { id: val.id, name: val.displayName };
            })
        );
      } catch (error) {
        console.error(error);
      }
    }
    fetchData().then(console.log);
    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <>
      <Input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
        // className={styles.searchBar}
      />
      {searchTerm !== "" && !clicked ? (
        <div className={styles.searchContainer}>
          {filteredDropdownItems.map((val, index) => {
            return (
              <div
                className="d-flex align-items-center bg-light p-1 rounded"
                style={{ width: "100%" }}
                onClick={() => onSelectUser(val)}
              >
                <Avatar imageUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
                <span className="px-3">{val.name}</span>
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default DropdownWithSearchBar;
