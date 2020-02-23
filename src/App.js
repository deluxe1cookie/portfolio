import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts/Contacts';
import Footer from "./components/Footer/Footer";
import Particles from "react-particles-js";
import params from './particlesjs-config';

function App() {
    return (
        <div className="App">
            <div className="mainWrapper">
                <Header/>
                <Particles className='particles' params={params}/>
                <Intro/>
                <Skills/>
                <Projects/>
                <Contacts/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
