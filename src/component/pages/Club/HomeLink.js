import React from 'react';
import s from './Club.module.css'
import {NavLink} from "react-router-dom";
import arrowsBlack from "../../../img/arrow.png";

const HomeLink = () => {
    return (
        <div className={s.backLink}>
            <img className={s.arrowsBlack} src={arrowsBlack} alt="Стрелочка назад"/>
            <NavLink to="/">Вернуться на главную страницу</NavLink>
        </div>
    );
};

export default HomeLink;
