import React from 'react';
import BreachResultsTableRow from './BreachResultsTableRow';

class BreachResultsTable extends React.Component {
    
    constructor() {
    super();
    this.state = {allchecked: false};
    this.handleChange = this.handleChange.bind(this);
  }


   handleChange() {
    this.setState({
      allchecked: !this.state.allchecked
    });
    if(this.state.allchecked == true) {
      var x = document.getElementsByClassName("css-checkbox");
      var i;
      for (i = 0; i < x.length; i++) {
        x[i].checked = false;
        //x[i].state.classRow = "unhighlighted-funds-table-row";
      }
    } else if(this.state.allchecked == false) {
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
        <table id="results-table" className="table table-hover table-striped table-condensed">
            <thead>
                <tr className="results-table-header-container">
                    <th className="vcenter" id="breach-th1"><input type="checkbox" className="css-checkbox" checked={this.state.allchecked} onChange={this.handleChange} id="table-header-checkbox"/><label className="css-label" htmlFor="table-header-checkbox"></label></th>
                    <th id="breach-th2">Severity</th>
                    <th id="breach-th3">Rule Short Name</th>
                    <th id="breach-th4">Company</th>
                    <th id="breach-th5">Fund</th>
                    <th id="breach-th6">Impact</th>
                    <th id="breach-th7">Date</th>
                    <th id="breach-th8">Days in Breach</th>
                </tr>
            </thead>
            <tbody>
                <BreachResultsTableRow severity="/images/redbreach_small.png"
                                       shortname="Rule package: Max 10% of the fund's net assets invested"
                                       company="Banco Santander"
                                       fund="Balanced Fund 1"
                                       impact="EUR 29,600,000.00"
                                       inputID="res1"/>
                <BreachResultsTableRow severity="/images/redbreach_small.png" 
                                       shortname="Rule package: Max 10% of the fund's net assets invested"
                                       company="Banco Santander"
                                       fund="Balanced Fund 1"
                                       impact="EUR 29,600,000.00"
                                       inputID="res2"/>
                <BreachResultsTableRow severity="/images/redbreach_small.png" 
                                       shortname="Rule package: Max 10% of the fund's net assets invested"
                                       company="Banco Santander"
                                       fund="Balanced Fund 1"
                                       impact="EUR 29,600,000.00"
                                       inputID="res3"/>
                <BreachResultsTableRow severity="/images/redbreach_small.png" 
                                       shortname="Rule package: Max 10% of the fund's net assets invested"
                                       company="Banco Santander"
                                       fund="Balanced Fund 1"
                                       impact="EUR 29,600,000.00"
                                       inputID="res4"/>
                <BreachResultsTableRow severity="/images/redbreach_small.png" 
                                       shortname="Rule package: Max 10% of the fund's net assets invested"
                                       company="Banco Santander"
                                       fund="Balanced Fund 1"
                                       impact="EUR 29,600,000.00"
                                       inputID="res5"/>
                <BreachResultsTableRow severity="/images/redbreach_small.png" 
                                       shortname="Rule package: Max 10% of the fund's net assets invested"
                                       company="Banco Santander"
                                       fund="Balanced Fund 1"
                                       impact="EUR 29,600,000.00"
                                       inputID="res6"/>
                <BreachResultsTableRow severity="/images/redbreach_small.png" 
                                       shortname="Rule package: Max 10% of the fund's net assets invested"
                                       company="Banco Santander"
                                       fund="Balanced Fund 1"
                                       impact="EUR 29,600,000.00"
                                       inputID="res7"/>
                <BreachResultsTableRow severity="/images/redbreach_small.png" 
                                       shortname="Rule package: Max 10% of the fund's net assets invested"
                                       company="Banco Santander"
                                       fund="Balanced Fund 1"
                                       impact="EUR 29,600,000.00"
                                       inputID="res8"/>
                <BreachResultsTableRow severity="/images/redbreach_small.png" 
                                       shortname="Rule package: Max 10% of the fund's net assets invested"
                                       company="Banco Santander"
                                       fund="Balanced Fund 1"
                                       impact="EUR 29,600,000.00"
                                       inputID="res9"/>
                <BreachResultsTableRow severity="/images/redbreach_small.png" 
                                       shortname="Rule package: Max 10% of the fund's net assets invested"
                                       company="Banco Santander"
                                       fund="Balanced Fund 1"
                                       impact="EUR 29,600,000.00"
                                       inputID="res10"/>
                <BreachResultsTableRow severity="/images/redbreach_small.png" 
                                       shortname="Rule package: Max 10% of the fund's net assets invested"
                                       company="Banco Santander"
                                       fund="Balanced Fund 1"
                                       impact="EUR 29,600,000.00"
                                       inputID="res11"/>
                <BreachResultsTableRow severity="/images/redbreach_small.png" 
                                       shortname="Rule package: Max 10% of the fund's net assets invested"
                                       company="Banco Santander"
                                       fund="Balanced Fund 1"
                                       impact="EUR 29,600,000.00"
                                       inputID="res12"/>
                <BreachResultsTableRow severity="/images/redbreach_small.png" 
                                       shortname="Rule package: Max 10% of the fund's net assets invested"
                                       company="Banco Santander"
                                       fund="Balanced Fund 1"
                                       impact="EUR 29,600,000.00"
                                       inputID="res13"/>                       

            </tbody>
        </table>
    </div>
            );
        }
}

export default BreachResultsTable;