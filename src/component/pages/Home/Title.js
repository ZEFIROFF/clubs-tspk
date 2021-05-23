import React from 'react';
import s from './Home.module.css'

const Title = () => {
    return (
        <div className={s.title}>
            <h1>Клубы по <span className={s.active}>IT-отраслям</span><br/> в социально-педагогическом колледже</h1>
            <p className={s.paragraph}>Тут вы можете посмотреть и выбрать интересующие вас клубы, а так же загрузить свою работу в портфолио, чтобы ее проверили и оценили лучшие студенты нашего колледжа.</p>
        </div>
    );
};

export default Title;