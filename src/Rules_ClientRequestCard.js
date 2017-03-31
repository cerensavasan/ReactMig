import React from 'react';

class Rules_ClientRequestCard extends React.Component {
	
	constructor() {
    super();
  	}

	render(){
	return (
		<div className="thumbnail">
			<div className='rules-card-circleBorder pull-right'><img src="/images/loc.png" alt="Avatar" className="rules-cardIcon img-circle pull-right"/></div>
  			<div className="rules-card-title">
  				<h4 className='rules-card-header'><b>Client Request</b></h4> 
  			</div>
  			<div className="caption">
    			<p className='rules-card-explanation'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, eligendi doloribus sunt minus amet sit debitis repellat. Consectetur, culpa itaque odio similique suscipit</p>
    			<p className='rules-card-assignee'>Assigned to:</p>
				<div className="dropdown rules-card-dropdown" id="dasboard-dropdown-div">
      				<button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Mary Bowdoin
      				<span className="caret"></span></button>
      				<ul className="dropdown-menu">
        				<li>Mary Bowdoin</li>
        				<li>Paul Walker</li>
        				<li>Eduardo Sando</li>
      				</ul>
    			</div>
  			</div>
  			<button className="btn btn-primary pull-right rules-card-button" role="button">CREATE REPORT</button> 
		</div>
		);
	}
}

export default Rules_ClientRequestCard;