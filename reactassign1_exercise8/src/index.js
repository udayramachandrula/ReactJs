import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import HomeComponent from './HomeComponent';
import AboutComponent from './AboutComponent';
import ContactComponent from './ContactComponent';


const Links = () => (
  <div>
    <NavLink exact activeClassName="selected" to="/"> Home</NavLink>|
    <NavLink activeClassName="selected" to="/About">About</NavLink>|
    <NavLink activeClassName="selected" to="/Contact">Contact</NavLink>
  </div>
)



const ReactComponent = ()=>
(
  
  <Router>
    <Links/>
    <Route exact path='/' component={HomeComponent}/>
    <Route path='/About' component={AboutComponent}/> 
    <Route path='/Contact' component={ContactComponent}/> 
     </Router>
);


ReactDOM.render(
  <React.StrictMode>
    <ReactComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
