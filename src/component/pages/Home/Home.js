import React from 'react';
import s from './Home.module.css'
import Header from './Header.js'
import Title from './Title.js'
import Clubs from "./Clubs";

const Home = () => {
    return (
        <div className="container">
            <header>
                <Header/>
            </header>
            <main>
                <Title/>
                <span className={s.border}></span>
                <Clubs/>
            </main>
        </div>
    );
};

export default Home;
