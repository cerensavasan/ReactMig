import React from 'react';

class Reports_FailedReportCard extends React.Component {
	
	constructor() {
    super();
  	}

	render(){
	return (
		<div className="thumbnail">
			<div className='rules-card-circleBorder pull-right'><img src="/images/time.png" alt="Avatar" className="rules-cardIcon img-circle pull-right"/></div>
  			<div className="rules-card-title">
  				<h4 className='rules-card-header'><b>Failed Report</b></h4> 
  			</div>
  			<div className="caption">
          <p className="rules-card-category">Company</p>
    			<p className='rules-card-explanation'>Unilever</p>
    			<p className="rules-card-category">Report Title</p>
          <p className='rules-card-explanation'>Lorem Ipsum</p>
          <p className="rules-card-category">Scheduled</p>
          <p className='rules-card-explanation'>28-Feb-2017</p>
          <p className="rules-card-category">Message</p>
          <p className='rules-card-explanation'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  			</div>
        <button className="btn btn-primary pull-right rules-card-button" role="button">CREATE REPORT</button>
		</div>
		);
	}
}

export default Reports_FailedReportCard;