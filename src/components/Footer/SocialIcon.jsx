import React from 'react';
import style from "./Footer.module.css";

const SocialIcon = (props) => {
    return (
        <div className={style.socialItem}>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <img className={style.socialPic} src={props.icon} alt=""/>
            </a>
        </div>
    )
};

export default SocialIcon;