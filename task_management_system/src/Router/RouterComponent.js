import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import HomeComponent from '../Home/HomeComponent';
import AboutComponent from '../About/AboutComponent';
import LoginComponent from '../Login/LoginComponent';
import RegisterComponent from '../Login/RegisterComponent';


const RouterComponent =()=>(
    <Router>
      <Route exact path="/" component={LoginComponent}></Route>
      <Route exact path="/login" component={LoginComponent}></Route>
      <Route exact path="/home" component={HomeComponent}></Route>
      <Route exact path="/register" component={RegisterComponent}></Route>
      <Route exact path="/about" component={AboutComponent}></Route>
    </Router>
  );


  export default RouterComponent;
  