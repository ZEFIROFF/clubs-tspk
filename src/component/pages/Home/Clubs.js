import ClubBlock from './ClubBlock.js'
import React, {Component} from 'react';
import { clubsDataStyles, clubsName} from  '../../../Data'

class Clubs extends Component {
    render() {
        const names = clubsName;
        const DataStyles = clubsDataStyles;
        function clubRender(DataStyles, names) {
            let array = [];
            for (let i = 0; i < names.length; i++) {
                //getArrayToString(Object.keys(clubsDataStyles[i].backgroundColor[0])) - Это получение цветов
                array.push(<ClubBlock url={names[i].title} name={names[i].name} key={names[i].name}
                                      backgroundColorHover={Object.keys(DataStyles[i].backgroundColor[1]).toString()}
                                      backgroundColor={Object.keys(DataStyles[i].backgroundColor[0]).toString()}/>);
            }
            return array;
        }


        return (
            <div className="all-clubs grid-container">
                {clubRender(DataStyles, names)}
                {/*<ClubBlock  name="Java" backgroundColor="var(--block-background-red-milk)"/>*/}
            </div>
        );
    }
}
//Я очень хочу кваса - заплатите мне пожалуйста квасом вот мой номер(скиньте денег на квас) - +79021899446
export default Clubs;