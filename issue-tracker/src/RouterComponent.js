import React from 'react';
//import ReactDOM from 'react-dom';

import IssueListComponent from './components/IssueListComponent';
import AboutComponent from './About/AboutComponent';
//import Links from './components/IssueListComponent';

import{BrowserRouter as Router,Route,NavLink} from 'react-router-dom';

 export const Links = () => {
    return(
    <div>
      <NavLink exact activeClassName="selected" to="/Home"> Home</NavLink>|
      <NavLink activeClassName="selected" to="/About">About</NavLink>|
     
    </div>);
}


  

const RouterComponent = () =>(
    <Router>
        <Links></Links>
        <Route exact path='/' component={IssueListComponent}/>
        <Route  path='/Home' component={IssueListComponent}/>
        <Route  path='/About' component={AboutComponent}/>
    </Router>
);

export default RouterComponent;
