import React from 'react';
import style from './Header.module.css'
import NavMenu from './NavMenu/NavMenu';

function Header() {
    return (
        <div className={style.header}>
            <div className={style.container}>
                <NavMenu/>
            </div>
        </div>
    );
}

export default Header;
