import React from 'react';
import PropTypes from 'prop-types';
import styles from './sender.module.css'

function Sender(props) {
    return (
        <div className={styles.container}>
            <span>Hey John, I am looking for the best admin template. Could you please help me to find it out?.It should use nice Framework.</span>
        </div>
    );
}

export default Sender;