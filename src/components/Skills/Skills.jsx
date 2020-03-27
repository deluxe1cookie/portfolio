import React from 'react';
import style from './Skills.module.css';
import Skill from './Skill/Skill';
import reactIcon from '../../assets/skills/react.svg';
import htmlIcon from '../../assets/skills/code.svg';
import jsIcon from '../../assets/skills/js.svg';
import gitIcon from '../../assets/skills/git.svg';
import reduxIcon from '../../assets/skills/Redux.svg';
import tsIcon from '../../assets/skills/typescript.svg';
import restIcon from '../../assets/skills/rest.svg';
import websocketIcon from '../../assets/skills/websocket.svg';
import mongodbIcon from '../../assets/skills/mongodb.svg';
import phpIcon from '../../assets/skills/PHP-logo.svg';
import cIcon from '../../assets/skills/c--4.svg';
import SectionTitle from '../SectionTitle/SectionTItle';
import mysqlIcon from '../../assets/skills/mysql.svg';

class Skills extends React.Component {
    state = {
        frontendSkills: [
            {
                title: 'React',
                icon: reactIcon,
                delay: 200
            },
            {
                title: 'Redux',
                icon: reduxIcon,
                delay: 300
            },
            {
                title: 'JavaScript',
                icon: jsIcon,
                delay: 400
            },
            {
                title: 'TypeScript',
                icon: tsIcon,
                delay: 500
            },
            {
                title: 'CSS (Modules, SCSS)',
                icon: htmlIcon,
                delay: 600
            },
            {
                title: 'GIT',
                icon: gitIcon,
                delay: 700
            },
            {
                title: 'REST API',
                icon: restIcon,
                delay: 800
            },
            {
                title: 'WebSocket',
                icon: websocketIcon,
                delay: 900
            }
        ],
        backendSkills: [
            {
                title: 'NodeJS (Express)',
                icon: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
                delay: 1000
            },
            {
                title: 'PHP',
                icon: phpIcon,
                delay: 1200
            },
            {
                title: 'C#',
                icon: cIcon,
                delay: 1200
            },
        ],
        databaseSkills: [
            {
                title: 'MongoDB',
                icon: mongodbIcon,
                delay: 1100
            },
            {

                title: 'MySql',
                icon: mysqlIcon,
                delay: 1300
            }
        ],
        sectionTitleLinesColors: ['#4e93e6', '#00a800', '#930095']
    };

    render() {
        const skillElement = this.state.frontendSkills.map(s => <Skill title={s.title} icon={s.icon} delay={s.delay}/>);
        const backendSkillsElement = this.state.backendSkills.map(s => <Skill title={s.title} icon={s.icon}
                                                                              delay={s.delay}/>);
        const databaseSkillsElement = this.state.databaseSkills.map(s => <Skill title={s.title} icon={s.icon}
                                                                                delay={s.delay}/>);

        return (
            <div className={style.skills}>
                <div id="skills" className={style.container}>
                    <SectionTitle title={`Мои навыки`} linesColors={this.state.sectionTitleLinesColors}/>

                    <div className={style.skillsWrap}>{skillElement}</div>
                    <div className={style.skillsWrap}>{backendSkillsElement}</div>
                    <div className={style.skillsWrap}>{databaseSkillsElement}</div>
                </div>
            </div>
        );
    }
}

export default Skills;
