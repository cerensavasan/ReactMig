import React from 'react';
import FundsTableRow from './FundsTableRow';

class FundsTable extends React.Component {
    
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
        <table id="funds-table" className="table table-hover table-striped table-condensed">
            <thead>
                <tr className="funds-table-header-container">
                    <th className="vcenter" id="funds-th1"><input type="checkbox" className="css-checkbox" checked={this.state.allchecked} onChange={this.handleChange} id="table-header-checkbox"/><label className="css-label" htmlFor="table-header-checkbox"></label></th>
                    <th id="funds-th2">Fund Name</th>
                    <th id="funds-th3">NAV</th>
                    <th id="funds-th4">Change in NAV since past period</th>
                    <th id="funds-th5">Difference: NAV vs Bloomberg</th>
                    <th id="funds-th6">Number of Breaches</th>
                </tr>
            </thead>
            <tbody>
              <FundsTableRow fundname="Sed Lacinia Fund" nav="23,528" changenav="[0.95]" difference="0.17" numberBreaches="4" inputID="inp1"/>
              <FundsTableRow fundname="SSGM Fund ABC" nav="43,278" changenav="0.36" difference="0.00" numberBreaches="0" inputID="inp2"/>
              <FundsTableRow fundname="SSGM Balanced Fund 12" nav="69,116" changenav="0.00" difference="0.74" numberBreaches="4" inputID="inp3"/>       
              <FundsTableRow fundname="Nulla Facilisi Fund" nav="29,750" changenav="0.12" difference="0.49" numberBreaches="0" inputID="inp4"/>
              <FundsTableRow fundname="Mi Tella Fund" nav="53,250" changenav="0.36" difference="0.00" numberBreaches="2" inputID="inp5"/>
            </tbody>
        </table>
    </div>
    );
  }
}

export default FundsTable;