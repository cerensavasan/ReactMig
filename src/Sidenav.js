import React from 'react';
import SidenavOpened from './SidenavOpened';

class Sidenav extends React.Component {
  
  constructor() {
    super();
    this.closeNav = this.closeNav.bind(this);
    this.openNav = this.openNav.bind(this);
  }
  
  componentDidMount () {
  	document.getElementById("breach-results-pusher").style.marginRight = "40px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("breach-results-pusher").style.marginRight= "40px";
    document.getElementById("mainOfSide").style.width = "40px";
  	document.getElementById("open-nav-spanP").style.marginTop = "20px";
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("breach-results-pusher").style.marginRight = "350px";
    document.getElementById("mainOfSide").style.width = "0px";
    document.getElementById("mainOfSide").style.padding = "0px";
  }

  render(){
  return (
    <div className="row sidenav-container pull-right">
    	<div className="col-sm-3 col-lg-2 col-sm-push-9 col-lg-push-10">
      		<nav className="navbar navbar-default navbar-fixed-side navbar-fixed-side-right sidenav" id="mySidenav">
  				<a href="javascript:void(0)" className="closebtn" onClick= {this.closeNav}>&times;</a>
  				<SidenavOpened />
  			</nav>		
  		</div>
  		<div id="mainOfSide" className="col-sm-9 col-lg-10 col-sm-pull-3 col-lg-pull-2">
    		<span id="spanOfSide" onClick= {this.openNav}><p id="open-nav-spanP">&#9664;</p></span>
    	</div>
	</div>
    );
  }
}

export default Sidenav;