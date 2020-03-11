import React from 'react';
import style from './NavMenu.module.css'
import {Link} from "react-scroll";

function NavMenu() {
    return (
        <div className={style.navMenu}>

            <Link to="intro"
                  spy={true}
                  activeClass={style.active}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={style.link}>Главная</Link>

            <Link to="skills"
                  spy={true}
                  activeClass={style.active}
                  smooth={true}
                  offset={-50}
                  duration={500} className={style.link}>Навыки</Link>

            <Link to="projects"
                  spy={true}
                  activeClass={style.active}
                  smooth={true}
                  offset={-20}
                  duration={500} className={style.link}>Проекты</Link>

            <Link to="contacts"
                  spy={true}
                  activeClass={style.active}
                  smooth={true}
                  offset={-10}
                  duration={500} className={style.link}>Контакты</Link>

        </div>
    );
}

export default NavMenu;
