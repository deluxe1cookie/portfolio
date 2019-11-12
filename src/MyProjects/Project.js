import React from 'react';
import styles from './Project.module.css';

function Project(props) {
    return (
        <div className={styles.project}>
            <div>
                <a href={props.projectLink}><span>Смотреть</span></a>
            </div>
            <h2>{props.projectName}</h2>
            <span>{props.projectDescription}</span>
        </div>
    );
}

export default Project;
