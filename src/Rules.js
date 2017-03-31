import React from 'react';
import MyNavbar from './MyNavbar';
import SubnavFilter from './SubnavFilter';
import RulesTable from './RulesTable';

class Rules extends React.Component {
	
	constructor() {
    super();
  }

	render(){
	return (
    <div className="rules-container">
      <MyNavbar/>
      <SubnavFilter location="Rules" SourceOfImage="/images/noun_64138_rule.svg"/>
      <div className="rules-table-container">
        <h1 className="rules-table-header">1031 Rules</h1>
        <RulesTable />
      </div>
    </div>);
	}
}

export default Rules;