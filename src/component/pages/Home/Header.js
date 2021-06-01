import React from 'react';
import logoSun from '../../../img/Sun.png';
import logoCopp from '../../../img/logoCopp.png'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <div className={s.nav}>
            <div className={s.theme}>
                <img src={logoSun} alt="Смена на темный/светлый дизайн"/>
            </div>
            <div className={s.logo}>
                <NavLink to="/"><img src={logoCopp} alt="Логотип ЦОПП"/></NavLink>
            </div>
            <div className="none">
            {/* this for j-s spbtwn */}
            </div>
        </div>
    );
};

export default Header;