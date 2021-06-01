import React from 'react';
import s from './Home.module.css'
import Header from './Header.js'
import Title from './Title.js'
import ClubsGrid from "./ClubsGrid";

const Home = () => {
    return (
        <div className="container">
            <header>
                <Header/>
            </header>
            <main>
                <Title/>
                <ClubsGrid/>
            </main>
        </div>
    );
};

export default Home;