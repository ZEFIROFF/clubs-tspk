import ClubBlock from './ClubBlock.js'
import React, {Component} from 'react';
import {clubsDataStyles} from '../../../Data'
import firebase from '../../../base';
import Loader from "react-loader-spinner";
import base from '../../../base';

class ClubsGrid extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            arrayClubs: []
        }
    }

    useEffect() {
        setTimeout(() => {
            this.setState({isLoading: false});
        }, 700)
    }

    componentDidMount() {
        let array = []
        let listClubs = firebase.database().ref('clubs');
        listClubs.on('value', (snapshot => {
            snapshot.forEach(function (childSnapshot) {
                let childData = childSnapshot.val();
                array.push(childData)
            });

            this.setState({arrayClubs: array})
            this.setState({isLoading: false});
        }));
    }

    render() {
        if (firebase.apps.length === 0) {
            firebase.initializeApp(base);
        }

        let names = this.state.arrayClubs;
        const DataStyles = clubsDataStyles;

        function clubRender(DataStyles, names) {
            let array = []
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
                {this.state.isLoading == true ?
                    <div className="loader">
                        <Loader
                            type="Grid"
                            color="#fc7171"
                            secondaryColor="White"
                            height={300}
                            width={300}
                        />
                    </div> : clubRender(DataStyles, names)

                }
            </div>
        );
    }
}

//Я очень хочу кваса - заплатите мне пожалуйста квасом вот мой номер(скиньте денег на квас) - +79021899446
export default ClubsGrid;