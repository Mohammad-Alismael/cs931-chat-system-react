import React, { useState } from "react";
import styles from "./UserChatCard.module.css";
import Avatar from "../avatar/Avatar.jsx";
function UserChatCard(props) {
  const handleClick = (e) => {
    const currentValue = e.target.getAttribute("data-opened");
    if (currentValue === "false") {
      e.target.classList.add(styles.active);
    } else {
      e.target.classList.remove(styles.active);
    }
    e.target.setAttribute("data-opened", currentValue == "false");
  };
  return (
    <div onClick={handleClick} data-opened={false} className={styles.container}>
      <Avatar imageUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
      <div className={styles.innerContainer}>
        <p className={styles.name}>Gavin Griffith</p>
        <span className={styles.lastMessage}>i will purchase it for sure</span>
        <span className={styles.time}>Apr 30</span>
      </div>
    </div>
  );
}

export default UserChatCard;
