import React from 'react';
import MyNavbar from './MyNavbar';
import SubnavFilter from './SubnavFilter';
import FundsCardHolder from './FundsCardHolder';
import FundsTable from './FundsTable';

class Funds extends React.Component {
	
	constructor() {
    	super();
  	}

	render(){
	return (
	<div className="funds-container">
    	<MyNavbar/>
    	<SubnavFilter location="Funds"/>
		<FundsCardHolder />
		<div className="funds-table-container">
        	<h1 className="funds-table-header">2083 Results</h1>
        	<FundsTable />
      </div>
    </div>);
	}
}

export default Funds;