import React from 'react';
import styles from './Nav.module.css';

function Nav() {
    return (
        <div className={styles.nav}>
            <a href="" className={styles.link}>Главная</a>
            <a href="" className={styles.link}>Умения</a>
            <a href="" className={styles.link}>Проекты</a>
            <a href="" className={styles.link}>Контакты</a>
        </div>
    );
}

export default Nav;
