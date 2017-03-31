import React from 'react';

class FundsCard extends React.Component {
	
	constructor() {
    super();
  	}

	render(){
	return (
		<div className="fund-card">
			<span className="centerer"></span>
			<img src={this.props.SourceOfImage} alt="Avatar" className="fund-card-img centered"/>
    		<p className='funds-card-option'><b>{this.props.Desc}</b></p> 
    		<h4 className='funds-card-header' id={this.props.coloradder}><b>{this.props.OptionName}</b></h4> 
		</div>
		);
	}
}

export default FundsCard;
