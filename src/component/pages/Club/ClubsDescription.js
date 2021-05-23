import React from 'react';
import s from './Club.module.css'

const ClubDescription = (props) => {
    const blockFirst = props.data.blockFirst;
    const blockSecond = props.data.blockSecond;
    //Надо решить где тру и где фолз вывода информации
    // и пофиксить картинки а вообще похуй иди лучше чего нибудь сладкого поешь
    return (
        <div className={s.description}>
            {blockFirst.status ? <div>
                    <div className={s.time}>-{blockFirst.timeFirst}</div>
                    <div className={s.place}>Клуб находится в{blockFirst.place}</div>
                </div>
                : <div>
                    <div className={s.description}>Если вы хотите вступить в наш клуб, то можете обратиться сюда для составления заявки.</div>
                    <div className={s.link}>{blockSecond.link}</div>
                </div>
            }
        </div>
    );
};

export default ClubDescription;
