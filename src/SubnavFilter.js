import React from 'react';
import PickedFilter from './PickedFilter';
import DashboardNavigatorDropdown from './DashboardNavigatorDropdown';
import SubnavButton from './SubnavButton';

class SubnavFilter extends React.Component {
  
  constructor() {
    super();
    this.state = {
      navigator: false,
      newruleadder: ""
    };
  }

  componentDidMount() {
    if(this.props.location == "Rules"){
       this.state.newruleadder = "hi";
    }
  }

  render(){
  return (
     <div className="container-fluid dash-dropdown-container" id="subnavfilter-id">
      <div className='circleBorderSubnav pull-left'><img src={this.props.SourceOfImage} alt="Avatar" className="subnavIcon img-circle"/></div>
      <div className="subnav-header pull-left">
        <h1>{this.props.location}</h1>
      </div>
      <div className="btn-group pull-right">
        <PickedFilter name="❤ Saved Filters" d1="Filter 1" d2="Filter 2" d3="Filter 3" extraID="saved-filter-button"/>
        <SubnavButton SourceOfImg="/images/noun_755036_export.svg" nameButt="EXPORT"/>
        <SubnavButton SourceOfImg="/images/noun_626779_print.svg" nameButt="PRINT"/>
        <button className="btn btn-default btn-subnav" id="search-filter-button" role="button"><img className="search-icon" src="/images/noun_686216_search.svg"/></button>
      </div>
    </div>
    );
  }
}

export default SubnavFilter;

//<DashboardNavigatorDropdown name={this.props.location} d1="Funds" d2="Reports" d3="Breach Results" d4="Rules" d5="Tasks"/>