import React from 'react';
import styles from './Skills.module.css';
import Skill from "./Skill";

class Skills extends React.Component {
    skills = [
        {
            skillName: "React",
            skillImgSrc: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
            skillNameDescription: "JavaScript-библиотека для создания пользовательских интерфейсов"
        },
        {
            skillName: "JS",
            skillImgSrc: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
            skillNameDescription: "JavaScript® (часто просто JS) — это легковесный, интерпретируемый или " +
                "JIT-компилируемый, объектно-ориентированный язык с функциями первого класса. Наиболее " +
                "широкое применение находит как язык сценариев веб-страниц, но также используется и в " +
                "других программных продуктах, например, node.js или Apache CouchDB."
        },
        {
            skillName: "HTML + CSS",
            skillImgSrc: "http://www.bobbyberberyan.com/wp-content/uploads/2012/03/HTML5CSS3Logos.svg",
            skillNameDescription: "HTML — стандартизированный язык разметки документов во Всемирной паутине. " +
                "Большинство веб-страниц содержат описание разметки на языке HTML. CSS — формальный язык описания " +
                "внешнего вида документа, написанного с использованием языка разметки. Преимущественно используется " +
                "как средство описания, оформления внешнего вида веб-страниц, написанных с помощью языков разметки " +
                "HTML и XHTML, но может также применяться к любым XML-документам, например, к SVG или XUL."
        }
    ];

    render = () => {
        const skillsElements = this.skills.map(skill => <Skill skillName={skill.skillName}
                                                               skillImgSrc={skill.skillImgSrc}
                                                               skillNameDescription={skill.skillNameDescription}/>);

        return (
            <div className={styles.skills}>
                <div className={styles.container}>
                    <div className={styles.mySkillsWrap}><span>Мои умения:</span></div>
                    <div className={styles.skillsWrap}>{skillsElements}</div>
                </div>
            </div>
        )
    };
}

export default Skills;
