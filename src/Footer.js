import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <span>Дрюцкий Роман</span>
                <div className={styles.socials}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <span>&nbsp; 2019 Все права защищены</span>
            </div>
        </div>
    );
}

export default Footer;
