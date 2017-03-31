import React from 'react';
import PickedFilter from './PickedFilter';

class FilterContainer extends React.Component {
	
	constructor() {
    	super();
  	}

	render(){
	return (
	<div className="filter-container container-fluid gradient-blue" id="filter-container-id">
    	<PickedFilter name="Yesterday"/>
      <PickedFilter name="All Companies"/>
      <PickedFilter name="Assigned to Me + Unassigned"/>
      <PickedFilter name="More"/>
      <div className="pull-right">
        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#advanced-filter-container" aria-expanded="true" aria-controls="advanced-filter-container">
        <h4>Advanced Filters<span className="caret"></span></h4></a>
      </div>
  </div>);
	}
}

export default FilterContainer;