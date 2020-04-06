import React from 'react';
import style from './../Projects.module.css';
import SocialIcon from '../../Footer/SocialIcon';
import gitIcon from './../../../assets/social-icons/github.svg';

function Project(props) {
    return (
        <div className={style.projectItem} style={{backgroundImage: `url(${props.img})`}}>
            <a className={style.projectLink}
               href={props.link}
               target='_blank' rel='noopener noreferrer'>{props.todo}</a>
            <div className={style.projectDescr}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <p className={style.projectDescrText}>{props.description}</p>
                <div className={style.githubIcon}><SocialIcon icon={gitIcon} link={props.githubLink}/></div>
            </div>
        </div>
    );
}

export default Project;