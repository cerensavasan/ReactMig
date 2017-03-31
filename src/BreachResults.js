import React from 'react';
import MyNavbar from './MyNavbar';
import SubnavFilter from './SubnavFilter';
import BreachResultsCard from './BreachResultsCard';
import MyTable from './MyTable';
import BreachResultsTable from './BreachResultsTable';
import FilterContainer from './FilterContainer';
import Sidenav from './Sidenav';
import CollapsingFilter from './CollapsingFilter';

class BreachResults extends React.Component {
	
	constructor() {
    	super();
  	}

	render(){
	return (
	<div className="results-container">
    	<MyNavbar/>
          <div id="breach-results-pusher">
    	      <SubnavFilter location="Breach Results" SourceOfImage="/images/bars-orange.png"/>
            <CollapsingFilter />
    	      <div className="results-table-container" id="results-table-container">
    		      <BreachResultsTable />
    	      </div>
          </div>
  </div>);
	}
}

export default BreachResults;