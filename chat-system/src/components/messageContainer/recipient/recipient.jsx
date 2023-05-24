import React from "react";
import PropTypes from "prop-types";
import styles from './recipient.module.css'
Recipient.propTypes = {};

function Recipient({text}) {
  return (
    <div
      className={styles.container}
    >
      <span>{text}</span>
    </div>
  );
}

export default Recipient;
