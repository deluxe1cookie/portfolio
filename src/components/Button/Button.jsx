import React from 'react';
import style from "./Button.module.css";

function Button(props) {
    return (
        <div className={style.buttonWrap}>
            <button className={style.button}>{props.title}</button>
        </div>
    )
}

export default Button;