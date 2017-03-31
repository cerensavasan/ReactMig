import React from 'react';
import NavHeader from './NavHeader';
import NavButton from './NavButton';
import {Link} from 'react-router';

class MyNavbar extends React.Component {

render(){
  return (
    <nav className="navbar navbar-default fixed-top gradient-dashboard" role="navigation">
      <div className="container-fluid">
        <NavHeader/>

        <nav className="collapse navbar-collapse" role="navigation">
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <Link to="/"><img className="dashboard-button-svg" src="/images/noun_842022_home.svg"/> Home </Link>
            </li>
            <NavButton goTo="/tasks" name="Tasks"/>
            <NavButton goTo="/reports" name="Reports"/>
            <NavButton goTo="/results" name="Results"/>
            <NavButton goTo="/rules" name="Rules"/>
            <NavButton goTo="/funds" name="Funds"/>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">
              <img src="/images/id-image.jpg" className="profile-image img-circle"/> Mary Bowdoin <b className="caret"></b></a>
              <ul className="dropdown-menu">
                <li><a href="#">Account</a></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Sign Out</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
}
}

export default MyNavbar;

