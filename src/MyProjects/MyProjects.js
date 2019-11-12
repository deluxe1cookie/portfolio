import React from 'react';
import styles from './MyProjects.module.css';
import Project from "./Project";

class MyProjects extends React.Component {
    projects = [
        {
            projectName: 'Portfolio',
            projectDescription: 'Моё портфолио. Та страница, на которой вы сейчас. =)',
            projectImg: './public/portfolioImg.png',
            projectLink: '#'
        },
        {
            projectName: 'ToDoList',
            projectDescription: 'Список дел на React',
            projectImg: 'https://cdn.dribbble.com/users/2128942/screenshots/6567445/dribbble_2x.png',
            projectLink: '#'
        }
    ];
    render = () => {
        const MyProjectsElements = this.projects.map(project => <Project projectName={project.projectName}
                                                                         projectDescription={project.projectDescription}
                                                                         projectImg={project.projectImg}
        projectLink={project.projectLink}/>)
        return (
            <div className={styles.myProjects}>
                <div className={styles.container}>
                    <span>Мои проекты:</span>
                    <div className={styles.projectsWrap}>{MyProjectsElements}</div>
                </div>
            </div>
        )
    };
}

export default MyProjects;
