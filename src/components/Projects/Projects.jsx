import React from 'react';
import style from './Projects.module.css';
import SectionTitle from '../SectionTitle/SectionTItle';
import Project from './Project/Project';
import todolistPic from './../../assets/projects/todolist_bw.png';
import socialNetworkPic from './../../assets/projects/social_network.png';
import pic2048 from './../../assets/projects/2048_logo.svg';
import websocketPic from './../../assets/projects/websocket_chat.png';
import galleryPic from './../../assets/projects/gallery.jpg';
import covid19Pic from './../../assets/projects/covid19.png';

class Projects extends React.Component {
    state = {
        projects: [
            {
                title: 'COVID-19',
                delay: 100,
                img: covid19Pic,
                link: 'https://pensive-brahmagupta-93011c.netlify.com/',
                description: 'На основе Вашего местоположения актуальные данные, взятые из Центра системных наук ' +
                    'и инженерии при Университете Джона Хопкинса.',
                todo: 'Понапрягаться!',
                githubLink: 'https://github.com/deluxe1cookie/covid-19-belarus'
            },
            {
                title: 'Бесконечная галерея',
                delay: 200,
                img: galleryPic,
                link: 'https://modest-cori-8b1bbc.netlify.com/',
                description: 'Красиво оформленные фотографии, которые можно легко скачать.',
                todo: 'Посозерцать!',
                githubLink: 'https://github.com/deluxe1cookie/infinitePhotos'
            },
            {
                title: 'Websocket-чат',
                delay: 300,
                img: websocketPic,
                link: 'https://inspiring-montalcini-0d1812.netlify.com/',
                description: 'Протокол обеспечивает ' +
                    'возможность обмена данными между браузером и сервером через постоянное соединение в виде ' +
                    '«пакетов», без разрыва соединения и дополнительных HTTP-запросов.',
                todo: 'Пообщаться!',
                githubLink: 'https://github.com/deluxe1cookie/websocket-chat-reactjs'
            },
            {
                title: '2048',
                delay: 400,
                img: pic2048,
                link: 'https://deluxe1cookie.github.io/2048/',
                description: '19-летний итальянский разработчик Габриэле Чирулли (Gabriele Cirulli) создал ' +
                    'чрезвычайно захватывающую игру 2048, скрестив тетрис и «пятнашки».',
                todo: 'Поиграть!',
                githubLink: 'https://github.com/deluxe1cookie/2048'
            },
            {
                title: 'Социальная сеть',
                delay: 500,
                img: socialNetworkPic,
                link: 'https://deluxe1cookie.github.io/social_network/',
                description: 'Небольшая социальная сеть на React.',
                todo: 'Познакомиться!',
                githubLink: 'https://github.com/deluxe1cookie/social_network'
            },
            {
                title: 'Список дел',
                delay: 600,
                img: todolistPic,
                // link: '',
                description: 'Удобный todolist для людей.',
                todo: 'В разработке',
                // githubLink: ''
            }
        ],
        sectionTitleLinesColors: ['#3351a8']
    };

    render() {
        const projectElement = this.state.projects.map(p => {
            return <Project title={p.title} delay={p.delay} img={p.img} link={p.link} description={p.description}
                            todo={p.todo} githubLink={p.githubLink}/>
                ;
        });

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
