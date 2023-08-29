import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
// import Web2 from './App';



const router_outlet = (
<Router>
  <div>
     <Routes>
       <Route exact path='/' Component={Home}/>
       <Route exact path='/Project' Component={Project}/>
       <Route exact path='/Contact' Component={Contact}/>
      </Routes>    
    
  </div>
</Router>
);


ReactDOM.render(router_outlet,document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
