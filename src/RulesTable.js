import React from 'react';
import RulesTableRow from './RulesTableRow';

class RulesTable extends React.Component {
    
    constructor() {
        super();
        this.state = {allchecked: false};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
    this.setState({
      allchecked: !this.state.allchecked
    });
    if(this.state.checked == true) {
      var x = document.getElementsByClassName("css-checkbox");
      var i;
      for (i = 0; i < x.length; i++) {
        x[i].checked = false;
        //x[i].state.classRow = "unhighlighted-funds-table-row";
      }
    } else if(this.state.checked == false) {
      var x = document.getElementsByClassName("css-checkbox");
      var i;
      for (i = 0; i < x.length; i++) {
        x[i].checked = true;
        //x[i].state.classRow = "highlighted-funds-table-row";
      }
    }
    console.log("changed element className for table row");
  }

    render(){
    return (
    <div>
        <table id="rules-table" className="table table-hover table-striped table-condensed">
            <thead>
                <tr className="rules-table-header-container">
                    <th className="vcenter" id="rules-th1"><input type="checkbox" className="css-checkbox" checked={this.state.allchecked} id="table-header-checkbox"/><label className="css-label" htmlFor="table-header-checkbox"></label></th>
                    <th id="rules-th2">Rule Short Name</th>
                    <th id="rules-th3">Description</th>
                    <th id="rules-th4">Fund Mappings</th>
                    <th id="rules-th5">Created</th>
                </tr>
            </thead>
            <tbody>
              <RulesTableRow shortname="Rule package: Max 10% of the fund's net assets invested"
                             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate facilisis."
                             fundmap="3"
                             inputID="rul1"/>                       
              <RulesTableRow shortname="Max 10% of the fund's assets invested in each issuer"
                             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate facilisis."
                             fundmap="5"
                             inputID="rul2"/>
              <RulesTableRow shortname="UCITS: Max 10% of the fund's assets invested in each issuer"
                             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate facilisis."
                             fundmap="1"
                             inputID="rul3"/>          
            </tbody>
        </table>
    </div>
            );
        }
}

export default RulesTable;