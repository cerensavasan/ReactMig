import React from 'react';
import Rules_ClientRequestCard from './Rules_ClientRequestCard';
import Reports_FailedReportCard from './Reports_FailedReportCard';
import MyNavbar from './MyNavbar';
import SubnavFilter from './SubnavFilter';

class Reports extends React.Component {
	
	constructor() {
    super();
  	}

	render(){
	return (
	<div className="reports-container">
	<MyNavbar/>
	<SubnavFilter location="Reports" SourceOfImage="/images/reports.png"/>

	<div className="reports-cards-container">
      <div className="row">
        <div className="col-xs-18 col-sm-6 col-md-3">
          <Rules_ClientRequestCard />
        </div>
        <div className="col-xs-18 col-sm-6 col-md-3">
          <Rules_ClientRequestCard />
        </div>
        <div className="col-xs-18 col-sm-6 col-md-3">
          <Reports_FailedReportCard />
        </div>
        <div className="col-xs-18 col-sm-6 col-md-3">
          <Reports_FailedReportCard />
        </div>     
    </div>
    </div>
</div>);
}
}

export default Reports;