import React from 'react';
import styles from './Slogan.module.css';

function Slogan() {
    return (
        <div className={styles.slogan}>
            <div className={styles.container}>
                <h2>Ищу работу</h2>
                <a href="#"><span>Нанять меня</span></a>
            </div>
        </div>
    );
}

export default Slogan;
