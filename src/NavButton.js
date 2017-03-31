import React from 'react';
import {Link} from 'react-router';

class NavButton extends React.Component {
	
	constructor() {
    super();
    this.state = {name: "undefinedfornow"};
  }

  componentDidMount() {
  	this.setState({name: this.props.name});
  }

	render(){
		return (
    <li className="dropdown">
      <Link to={this.props.goTo}>{this.props.name}</Link>
		</li>
    );
	}
}

export default NavButton;                 