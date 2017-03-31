import React from 'react';

class NavHeader extends React.Component {
	
	constructor() {
    super();
 	}

	render(){
		return (
      	<div className="navbar-header">
          <a className="navbar-brand" href="/"><img src="/images/ss_logo.png"/></a>
          <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false" aria-controls="navbar">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          </button>
        </div>
		);
	}
}

export default NavHeader;                 