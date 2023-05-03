import React from "react";
import PropTypes from "prop-types";
import styles from './recipient.module.css'
Recipient.propTypes = {};

function Recipient(props) {
  return (
    <div
      className={styles.container}
    >
      <span>Out admin is the responsive admin template.!</span>
    </div>
  );
}

export default Recipient;
