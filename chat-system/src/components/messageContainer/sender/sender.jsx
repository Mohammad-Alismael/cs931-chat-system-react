import React from 'react';
import PropTypes from 'prop-types';
import styles from './sender.module.css'

function Sender({text}) {
    return (
        <div className={styles.container}>
            <span>{text}</span>
        </div>
    );
}

export default Sender;