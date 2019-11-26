import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
                <span>Контакты</span>
                <form className={styles.form} action="handler.php">
                    <input type="text" name="input1"/>
                    <input type="text" name="input2"/>
                    <textarea name="input3" id="" cols="30" rows="10"></textarea>
                    <button className={styles.formBtn} type="submit">Отправить</button>
                </form>


            </div>
        </div>
    );
}

export default Contacts;
