import React, { useContext, useState } from "react";
import styles from "./UserChatCard.module.css";
import Avatar from "../avatar/Avatar.jsx";
import { useNavigate } from "react-router-dom";
import Friend from "../../pages/friendsPage/components/Friend/Friend.jsx";
import { createChat } from "../../lib/chats.js";
import GlobalContext from "../../utils/context/globalContext.jsx";
import { AppContext } from "../../utils/context/AppContext.jsx";
function UserChatCard({ user, chatId }) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    const currentValue = e.target.getAttribute("data-opened");
    if (currentValue === "false") {
      e.target.classList.add(styles.active);
    } else {
      e.target.classList.remove(styles.active);
    }
    e.target.setAttribute("data-opened", currentValue == "false");
    navigate(`/chat/${chatId}`);
  };
  return (
    <div onClick={handleClick} data-opened={false} className={styles.container}>
      <Avatar imageUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
      <div className={styles.innerContainer}>
        <p className={styles.name}>{user?.displayName}</p>
        <span className={styles.lastMessage}>i will purchase it for sure</span>
        <span className={styles.time}>Apr 30</span>
      </div>
    </div>
  );
}

const Contact = ({ userObject }) => {
  const { user } = useContext(GlobalContext);
  const { chats, setChats, contacts, setContacts } = useContext(AppContext);

  const handleClick = (e) => {
    e.preventDefault();
    createChat([parseInt(user.uid), parseInt(userObject?.id)]).then((data) => {
      const objectFound = contacts.find((val) => val.id === userObject?.id);
      setChats([...chats, { id: data.id, participants: [objectFound] }]);
      console.log('contacts',contacts)
      const newContactsArray = contacts.filter((val) => val.id !== userObject?.id);
      console.log('newContactsArray',newContactsArray)
      setContacts(newContactsArray);
    });
  };
  return (
    <div onClick={handleClick} data-opened={false} className={styles.container}>
      <Avatar imageUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
      <div className={styles.innerContainer}>
        <p className={styles.name}>{userObject?.displayName}</p>
      </div>
    </div>
  );
};

const Empty = () => {
  return (
      <div data-opened={false} className={styles.container}>
        <div className={styles.innerContainer}>
          <p className={styles.name}>you have no friends to chat with</p>
        </div>
      </div>
  );
};

UserChatCard.Contact = Contact;
UserChatCard.Empty = Empty;
export default UserChatCard;
