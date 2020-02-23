import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
                <span>Контакты</span>
                <form className={styles.form} action="handler.php">
                    <input name="name" type="text" placeholder="Имя"/>
                    <input name="email" type="text" placeholder="E-mail"/>
                    <textarea name="message" id="" cols="30" rows="10" placeholder="Сообщение"/>
                    <button className={styles.formBtn} type="submit">Отправить</button>
                </form>


            </div>
        </div>
    );
}

export default Contacts;
