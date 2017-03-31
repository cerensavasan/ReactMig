import React from 'react';

class SubnavButton extends React.Component {
  
  constructor() {
    super();
  }

  render(){
  return (
      <button className="btn btn-default btn-subnav" role="button"><b>{this.props.nameButt}</b><img src={this.props.SourceOfImg} className="subnav-btn-img"/></button>
    );
  }
}

export default SubnavButton;