import React from 'react';
import style from './Projects.module.css';
import SectionTitle from '../SectionTitle/SectionTItle';
import Project from './Project/Project';
import todolistPic from './../../assets/projects/todolist.png';
import socialNetworkPic from './../../assets/projects/social_network.png';
import pic2048 from './../../assets/projects/2048_logo.svg';
import websocketPic from './../../assets/projects/websocket_chat.png';
import galleryPic from './../../assets/projects/gallery.jpg';
import covid19Pic from './../../assets/projects/covid19.png';
import musicPlayerPic from './../../assets/projects/music_player.png';
import easyRollPic from './../../assets/projects/easy_roll.png';

class Projects extends React.Component {
    state = {
        projects: [
            {
                title: 'Музыкальный плеер',
                delay: 100,
                img: musicPlayerPic,
                link: 'https://vibrant-johnson-a6ec24.netlify.app/',
                description: 'Vue / Vuex',
                todo: 'Послушать!',
                githubLink: 'https://github.com/deluxe1cookie/music-player-vuejs'
            },
            {
                title: 'Список дел',
                delay: 200,
                img: todolistPic,
                link: 'https://deluxe1cookie.github.io/todolist/',
                description: 'Почти канбан доска на React.',
                todo: 'Поработать!',
                githubLink: 'https://github.com/deluxe1cookie/todolist'
            },
            {
                title: 'COVID-19',
                delay: 300,
                img: covid19Pic,
                link: 'https://pensive-brahmagupta-93011c.netlify.com/',
                description: 'Определяет ваше местоположение и отображает статистику коронавирусной инфекции.',
                todo: 'Понапрягаться!',
                githubLink: 'https://github.com/deluxe1cookie/covid-19-belarus'
            },
            {
                title: 'Бесконечная галерея',
                delay: 100,
                img: galleryPic,
                link: 'https://modest-cori-8b1bbc.netlify.com/',
                description: 'Минималистичная галерея фотографий со всего мира, каждую из которых можно легко скачать.',
                todo: 'Посозерцать!',
                githubLink: 'https://github.com/deluxe1cookie/infinitePhotos'
            },
            {
                title: 'Websocket-чат',
                delay: 200,
                img: websocketPic,
                link: 'https://inspiring-montalcini-0d1812.netlify.com/',
                description: 'Обмен данными между браузером и сервером без разрыва соединения и дополнительных HTTP-запросов.',
                todo: 'Пообщаться!',
                githubLink: 'https://github.com/deluxe1cookie/websocket-chat-reactjs'
            },
            {
                title: '2048',
                delay: 300,
                img: pic2048,
                link: 'https://deluxe1cookie.github.io/2048/',
                description: 'Популярная смесь тетриса и пятнашек на нативном JS.',
                todo: 'Поиграть!',
                githubLink: 'https://github.com/deluxe1cookie/2048'
            },
            {
                title: 'Социальная сеть',
                delay: 100,
                img: socialNetworkPic,
                link: 'https://deluxe1cookie.github.io/social_network/',
                description: 'Небольшая социальная сеть на React.',
                todo: 'Познакомиться!',
                githubLink: 'https://github.com/deluxe1cookie/social_network'
            },
            {
                title: 'Easy Roll',
                delay: 200,
                img: easyRollPic,
                link: 'http://easy-roll.by/',
                description: 'Сайт-меню ресторана Easy Roll в Мозыре.',
                todo: 'Покушать!',
                // githubLink: ''
            },
        ],
        sectionTitleLinesColors: ['#3351a8']
    };

    render() {
        const projectElement = this.state.projects.map(p => <Project key={p.title} title={p.title}
                                                                     delay={p.delay} img={p.img}
                                                                     link={p.link} description={p.description}
                                                                     todo={p.todo} githubLink={p.githubLink}/>);

        return (
            <div id="projects" className={style.projects}>
                <div className={style.container}>

                    <SectionTitle title={`Мои Проекты`} linesColors={this.state.sectionTitleLinesColors}/>

                    <div className={style.projectsWrap}>
                        {projectElement}
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
