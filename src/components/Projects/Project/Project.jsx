import React from 'react';
import style from './../Projects.module.css';
import {Zoom} from 'react-reveal';

function Project(props) {
    debugger
    return (
        <Zoom delay={props.delay}>
            <div className={style.projectItem} style={{backgroundImage: `url(${props.img})`}}>

                <a className={style.projectLink}
                   href={props.link}
                   target='_blank' rel='noopener noreferrer'>{props.todo}</a>

                <div className={style.projectDescr}>
                    <h3 className={style.projectTitle}>{props.title}</h3>
                    <p className={style.projectDescrText}>{props.description}</p>
                </div>

            </div>
        </Zoom>
    );
}

export default Project;