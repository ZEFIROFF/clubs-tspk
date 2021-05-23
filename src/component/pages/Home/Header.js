import React from 'react';
import logoSun from '../../../img/Sun.png';
import logoTspk from '../../../img/ТСПК-logo.png'
import logoCopp from '../../../img/logoCopp.png'
import s from './Header.module.css'


const Header = () => {
    return (
        <div className={s.nav}>
            <div className={s.theme}>
                <img src={logoSun} alt="Смена на темный/светлый дизайн"/>
            </div>
            <div className={s.logo}>
                <a href="/"><img src={logoCopp} alt="Логотип ЦОПП"/></a>
            </div>
            <div className="none">
            {/* this for j-s spbtwn */}
            </div>
        </div>
    );
};

export default Header;