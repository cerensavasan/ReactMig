import React from 'react';

class DashboardCard extends React.Component {
	
	constructor() {
    super();
  	}

	render(){
	return (
		<div className="card">
			<div className='circleBorder'><img src={this.props.SourceOfImage} alt="Avatar" className="cardIcon img-circle"/></div>
  			<div className="cardTextContainer">
    			<h4 className='cardHeaderInDash'><b>{this.props.NumberOf}</b></h4> 
    			<p className='cardOptionNameInDash'>{this.props.OptionName}</p> 
  			</div>
		</div>
		);
	}
}

export default DashboardCard;