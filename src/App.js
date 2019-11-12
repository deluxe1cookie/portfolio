import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main";
import Skills from "./Skills/Skills";
import MyProjects from "./MyProjects/MyProjects";
import Slogan from "./Slogan";
import Contacts from "./Contacts";
import Footer from "./Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyProjects/>
            <Slogan/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
