import React from 'react';
import styles from './Main.module.css';

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Привет!</span>
                    <span>Я - Рома Дрюцкий</span>
                    <span>Frontend React разработчик</span>
                </div>
                <div className={styles.img}></div>
            </div>
        </div>
    );
}

export default Main;
