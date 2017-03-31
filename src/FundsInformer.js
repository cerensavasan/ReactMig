import React from 'react';

class FundsInformer extends React.Component {
	
	constructor() {
    super();
  	}

	render(){
	return (
		<div className="fund-informer">
    		<div className='circle-head'><h1 className='fund-informer-header'><b>{this.props.Head}</b></h1></div>
    		<p className='fund-informer-desc'>{this.props.Desc}</p>
    		<p className='fund-informer-extra'>{this.props.Extra}</p>  
		</div>
		);
	}
}

export default FundsInformer;
