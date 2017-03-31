import React from 'react';
import MyNavbar from './MyNavbar';
import SubnavFilter from './SubnavFilter';
import Rules_ClientRequestCard from './Rules_ClientRequestCard';
import Reports_FailedReportCard from './Reports_FailedReportCard';

class Tasks extends React.Component {
	
	constructor() {
    	super();
  	}

	render(){
	return (
	<div className="tasks-container">
	<MyNavbar/>
	<SubnavFilter location="Tasks"/>

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

export default Tasks;