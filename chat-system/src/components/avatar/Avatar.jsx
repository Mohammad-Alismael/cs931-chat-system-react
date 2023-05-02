import React from "react";
import styles from "./avatar.module.css";

const Avatar = ({ name, imageUrl }) => {
  return (
    <div className={styles.avatar}>
      <img src={imageUrl} alt={`Avatar for ${name}`} />
    </div>
  );
};

export default Avatar;
