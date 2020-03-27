import React from 'react';
import style from './Contacts.module.css';
import SectionTitle from '../SectionTitle/SectionTItle';
import Button from '../Button/Button';
import {Fade} from 'react-reveal';
import axios from 'axios';

class Contacts extends React.Component {
    state = {
        sectionTitleLinesColors: ['#8800a8'],
    };

    render() {
        return (
            <div id="contacts" className={style.contacts}>
                <div className={style.container}>

                    <SectionTitle title={'Контакты'} linesColors={this.state.sectionTitleLinesColors}/>

                    <Fade left>
                        <ContactForm/>
                    </Fade>
                </div>
            </div>
        );
    }
}

class ContactForm extends React.Component {
    state = {
        name: '',
        email: '',
        message: ''
    };

    onFieldChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const data = this.state;

        axios.post('https://email-client-for-portfolio3.herokuapp.com/sendMessage', data/*{withCredentials: true}*/);

        this.setState({
            name: '',
            email: '',
            message: ''
        });
    };

    render() {
        return (
            <form className={style.form} onSubmit={this.handleSubmit}>
                <input className={style.formInput} placeholder="Имя" type="text" name='name'
                       value={this.state.name} onChange={this.onFieldChange}/>
                <input className={style.formInput} placeholder="E-mail" type="text" name='email'
                       value={this.state.email} onChange={this.onFieldChange}/>
                <textarea className={style.formText} placeholder="Сообщение" name='message'
                          value={this.state.message} onChange={this.onFieldChange}/>
                <Button title='Отправить сообщение' type='submit'/>
            </form>
        );
    }
}

export default Contacts;
