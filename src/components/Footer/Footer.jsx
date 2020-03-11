import React from 'react';
import style from './Footer.module.css'
import gitIcon from './../../assets/social-icons/github.svg'
import telegramIcon from './../../assets/social-icons/telegram.svg'
import SocialIcon from "./SocialIcon";

class Footer extends React.Component {
    state = {
        icons: [
            {
                icon: gitIcon,
                link: 'https://github.com/deluxe1cookie'
            },
            {
                icon: telegramIcon,
                link: 'https://t.me/roma_memes'
            }
        ]
    };

    render() {

        const iconElement = this.state.icons.map(i => {
            return <SocialIcon icon={i.icon} link={i.link}/>
        });

        return (
            <div className={style.footer}>
                <div className={style.container}>

                    <div className={style.sectionTitle}>Рома Дрюцкий</div>

                    <div className={style.socialsWrap}>
                        {iconElement}
                    </div>

                    <div className={style.copyrights}>
                        © 2020 Все права защищены.
                    </div>

                </div>
            </div>
        );
    }
}

export default Footer;
