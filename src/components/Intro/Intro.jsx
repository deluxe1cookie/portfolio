import React from 'react';
import style from './Intro.module.css'
import {Fade, Flip} from "react-reveal";
import photo from './../../assets/photo.jpg'

function Intro() {
    return (
        <div id="intro" className={style.intro}>
            <div className={style.container}>

                <Fade left>
                    <div className={style.greeting}>
                        <span>Привет!</span>
                        <span className={style.introTitle}>Я <br
                            className={style.brStyle}/><span>Рома Дрюцкий</span></span>
                        <h1 className={style.titleDescription}>Front-end разработчик</h1>
                    </div>
                </Fade>

                <Flip right>
                    <div className={style.photoWrap}>
                        <div className={style.photo}>
                            <img className={style.photoImg} src={photo} alt=""/>
                        </div>
                    </div>
                </Flip>

            </div>
        </div>
    );
}

export default Intro;
