import React from 'react';
import { NavLink } from 'react-router-dom';
import YashLogo from '../yash_Logo.png';

class HeaderComponent extends React.Component {

    constructor(props){
        super(props);
        this.state={
            headerText:"Yash Technologies",
            headerLogo:YashLogo
        }
    }

    render() {
        return (
            <div className="header">
                <img className="logo" src={this.state.headerLogo} alt="logo"></img><br/>
                <NavLink activeClassName="selected" to='/home'>Home </NavLink> |
                <NavLink activeClassName="selected" to='/about'>About Us </NavLink>
            </div>
        )
    }

}

export default HeaderComponent;