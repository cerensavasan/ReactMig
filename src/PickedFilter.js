import React from 'react';

class PickedFilter extends React.Component {
	
	constructor() {
    super();
  }

    render(){
    if(this.props.extraID){
      return(
        <div className="dropdown dashboard-dropdown-div">
          <button className="btn filter-btn dropdown-toggle" type="button" data-toggle="dropdown" id={this.props.extraID}><b>{this.props.name}</b>
          <span className="caret"></span></button>
          <ul className="dropdown-menu">
            <li className="namelist-in-dropdown"><b>{this.props.listname}</b></li>
            <li className="listitem-in-dropdown">{this.props.d1}</li>
            <li className="listitem-in-dropdown">{this.props.d2}</li>
            <li className="listitem-in-dropdown">{this.props.d3}</li>
          </ul>
        </div>);  
    }
    else {
      return(
        <div className="picked-filter-div">
          <button className="btn filter-btn" type="button" id={this.props.extraID}><b>{this.props.name}</b>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;x</span></button>
        </div>
      );
    }
  }
}

export default PickedFilter;