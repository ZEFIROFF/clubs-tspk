import React, {Component} from 'react';
import s from './Clubs.module.css'
// import arrowsWhite from '../../../img/arrows-white.png'
import arrowsBlack from '../../../img/arrow.png'
import ClubDescription from "../Club/ClubsDescription";
import {NavLink} from "react-router-dom";


class ClubBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {hover: false};
    }
    toggleHover = () => {
        this.setState({hover: !this.state.hover})
    }

    render() {
        let blockStyle;
        (this.state.hover) ? blockStyle = {background: this.props.backgroundColorHover} : blockStyle = {background: this.props.backgroundColor};
        return (
            <div style={blockStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} className={s.block}>
                <div className={s.title}>
                    {(this.props.title) ? <div className=""><h3>{this.props.title}</h3></div> :
                        <div className=""><h3>Клуб:</h3><h3 className={s.name}>{this.props.name}</h3></div>}
                </div>
                {(this.props.title) ? <ClubDescription title={this.props.title} blockFirst={this.props.blockFirst} blockSecond={this.props.blockSecond}/> : <div className={s.footer}>
                    <NavLink className={s.arrow} to={`/clubs/${this.props.url}`}><span><img src={arrowsBlack} alt="Стрелочка вправо"/></span></NavLink>
                    <NavLink className={s.activeLink} to={`/clubs/${this.props.url}`}><span>Посмотреть работы</span></NavLink>
                </div>}
            </div>
        );
    };
}

export default ClubBlock;