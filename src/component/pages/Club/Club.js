import React, {Component} from 'react';
import Header from "../Home/Header"
import s from './Club.module.css';
import imgs from '../../../img/BlockImg/blockchain-concept-illustration_277904-443.png'
import { clubsDataStyles, clubsName} from  '../../../Data'
import ClubBlock from "../Home/ClubBlock";

class Club extends Component {
    render() {
        const data = clubsName[0];
        return (
            <div className="container">
                <div className={s.title}>
                    <div className="title-left">
                        <h1 className={data.name}>{data.name}</h1>
                        <p className={s.description}>{data.description}</p>
                    </div>
                    <div className={s.image}>
                        <img src={data.img} alt={data.title}/>
                        <img src={imgs} alt={data.title}/>
                    </div>
                </div>
                <main>
                    <div className="all-clubs grid-container">
                    <ClubBlock data={data} title="Когда работает клуб?" backgroundColor="var(--block-background-yellow-milk)" backgroundColorHover="var(--block-background-yellow-milk--hover)"/>
                    <ClubBlock data={data} title="Как вступить в клуб?" backgroundColor="var(--block-background-purple-milk)" backgroundColorHover="var(--block-background-purple-milk--hover)"/>
                    </div>
                </main>
            </div>
        );
    }
}

export default Club;