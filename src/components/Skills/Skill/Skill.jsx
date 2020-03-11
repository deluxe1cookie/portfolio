import React from 'react';
import style from './../Skills.module.css';
import {Zoom} from "react-reveal";

function Skill(props) {
    return (
        <Zoom delay={props.delay}>
            <div>
                <div className={style.skillsItem}>
                    <div className={style.skillPic}>
                        <img className={props.title === 'React' ? style.reactIcon : style.skillIcon} src={props.icon}
                             alt=""/>
                    </div>
                    <h3 className={style.skillTitle}>{props.title}</h3>
                </div>
            </div>
        </Zoom>
    )
}

export default Skill;