import React from 'react';
import style from './Contacts.module.css'
import SectionTitle from "../SectionTitle/SectionTItle";
import Button from "../Button/Button";
import {Fade} from "react-reveal";

class Contacts extends React.Component {
    state = {
        sectionTitleLinesColors: ['#8800a8']
    };

    render() {
        return (
            <div id="contacts" className={style.contacts}>
                <div className={style.container}>

                    <SectionTitle title={'Контакты'} linesColors={this.state.sectionTitleLinesColors}/>

                    <Fade left>
                        <form className={style.form}>
                            <input className={style.formInput} type="text" placeholder="Имя"/>
                            <input className={style.formInput} type="text" placeholder="E-mail"/>
                            <textarea className={style.formText} placeholder="Сообщение"/>
                        </form>
                        <Button title='Отправить сообщение'/>
                    </Fade>
                </div>
            </div>
        );
    }
}

export default Contacts;
