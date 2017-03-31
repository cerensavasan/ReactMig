import React from 'react';
import {Link} from 'react-router';

class DashboardNavigatorDropdown extends React.Component {
	
	constructor() {
    super();
  }

	render(){
    return (
    <div className="dropdown" id="dashboard-dropdown-navigator-div">
      <button className="btn btn-default btn-lg dropdown-toggle" type="button" data-toggle="dropdown"><b>{this.props.name}</b>
      <span className="caret"></span></button>
      <ul className="dropdown-menu">
        <li className="nav-drop-item"><Link to='/'>Dashboard</Link></li>
        <li className="nav-drop-item"><Link to='Funds'>{this.props.d1}</Link></li>
        <li className="nav-drop-item"><Link to='Reports'>{this.props.d2}</Link></li>
        <li className="nav-drop-item"><Link to='Results'>{this.props.d3}</Link></li>
        <li className="nav-drop-item"><Link to='Rules'>{this.props.d4}</Link></li>
        <li className="nav-drop-item"><Link to='Tasks'>{this.props.d5}</Link></li>
      </ul>
    </div>);
  }
}

export default DashboardNavigatorDropdown;