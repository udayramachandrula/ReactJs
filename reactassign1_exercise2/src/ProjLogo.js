import React from 'react';
import logo from './yash_Logo.png';
import './ProjLogo.css'

class ProjLogo extends React.Component{
    render(){
        return(
           <span>
                <img className="logo" src={logo} alt="logo"></img>
                </span>
        )
    }

}
export default ProjLogo;