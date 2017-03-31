import React from 'react';

class BreachResultsCard extends React.Component {
	
	constructor() {
    super();
  	}

	render(){
	return (
		<div className="breach-result-card">
			<div className='breach-circleBorder pull-left'><img src={this.props.SourceOfImage} alt="Avatar" className="breach-cardIcon img-circle pull-left"/></div>
  			<div className="breach-cardTextContainer">
  			<table>
  				<tbody>
  				<tr>
    				<td><b>{this.props.NumberOf}</b></td>
    				<td>      </td>
    				<td><b>{this.props.OptionName}</b></td> 
				</tr>
				</tbody>
			</table>
			</div>
		</div>
		);
	}
}

export default BreachResultsCard;