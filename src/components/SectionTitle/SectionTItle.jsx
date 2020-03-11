import React from 'react';
import style from './SectionTitle.module.css'
import {Fade} from "react-reveal";

function SectionTitle(props) {
    return (
        <Fade right>
            <div className={style.sectionBlock}>
                <h2 className={style.sectionTitle}>{props.title}</h2>

                <div className={style.lines}>
                    {props.linesColors.map(clr => <div className={style.line} style={{background: clr}}/>)}
                </div>
            </div>
        </Fade>
    );
}

export default SectionTitle;
