import React, { useContext, useState } from "react";
import { Collapse, Button } from "reactstrap";
import styles from "./Drawer.module.css";
import SearchBar from "../../pages/chatPage/components/SearchBar.jsx";
import Contacts from "../Contacts.jsx";
import GlobalContext from "../../utils/context/globalContext.jsx";
import classNames from "classnames";
import Chats from "../chats/Chats.jsx";
const MyDrawer = () => {
  const { toggleDrawer, isOpen, openUserProfile, toggleSettings } = useContext(GlobalContext);

  const drawerContainerClasses = classNames(styles.drawerContainer, {
    [styles.open]: isOpen,
    [styles.closed]: !isOpen,
  });

  return (
    <div className="d-block d-sm-none bg-light border">
      <div className={drawerContainerClasses}>
        <div className={styles.drawerContent}>
          <SearchBar openSettings={toggleSettings} />
          <Chats />
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default MyDrawer;
