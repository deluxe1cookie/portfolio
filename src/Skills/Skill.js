import React from 'react';
import styles from './Skills.module.css';

function Skill(props) {
    return (
        <div className={styles.skill}>
            <img src={props.skillImgSrc}/>
            <h2>{props.skillName}</h2>
            <span>{props.skillNameDescription}</span>
        </div>
    );
}

export default Skill;
