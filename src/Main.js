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
                <img src="https://sun9-33.userapi.com/c855224/v855224722/10ebfa/0GKbh9EyaFM.jpg" alt="Рома Дрюцкий"/>
            </div>
        </div>
    );
}

export default Main;
