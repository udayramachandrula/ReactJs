import React from 'react';
import logo from './yash_Logo.png';

class HeaderComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            headerText:"Yash Technologies",
            headerLogo:logo
        }
    }
    render(){
        return( 
            
                <div>
                    <h1>{this.state.headerText}</h1>
                    <span>
                        <img className="logo" src={this.state.headerLogo} alt="logo"></img> 
                    </span>
            
        </div> 
        );
    }
}


export default HeaderComponent;