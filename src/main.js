console.log('Loaded main.js into index.html');
import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import myRouter from './myRouter';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router'
require('bootstrap');
console.log('Imports done');
 
document.addEventListener('DOMContentLoaded', function() {

  ReactDOM.render(
    React.createElement(Footer),
    document.getElementById('footer-mount')
  );

  ReactDOM.render(
    React.createElement(myRouter),
    document.getElementById('router-container')
  );  

  console.log('loaded all components');
  
});

/*
  ReactDOM.render(
    React.createElement(myNavbar),
    document.getElementById('navbar-container')
  );
*/