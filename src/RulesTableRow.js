import React from 'react';

class RulesTableRow extends React.Component {
    
    constructor() {
        super();
        this.state = {dateTimestamp : Date.now(), checked: false, classRow: "unhighlighted-rules-table-row"};
        this.handleChange = this.handleChange.bind(this);
        this.formatDate = this.formatDate.bind(this);
        this.state.dateTimestamp = this.formatDate(new Date());
        console.log("new state is  " + this.state.dateTimestamp); 
    }

    formatDate(date) {
        var monthNames = ["January", "February", "March","April", "May", "June", "July","August", "September", "October","November", "December"];
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        return day + ' ' + monthNames[monthIndex] + ' ' + year;
    }


    handleChange() {
    this.setState({
      checked: !this.state.checked
    });
    if(this.state.checked == true) {
        this.state.classRow = "unhighlighted-rules-table-row";
    } else if(this.state.checked == false) {
       this.state.classRow = "highlighted-rules-table-row";
    }
    console.log("changed element className for table row");
  }

    render(){
    return (
        <tr className={this.state.classRow}>
            <td className="vcenter"><input type="checkbox" className="css-checkbox" checked={this.state.checked} onChange={this.handleChange} id={this.props.inputID}/><label className="css-label" htmlFor={this.props.inputID}></label></td>
            <td className="rules-table-cell">{this.props.shortname}</td>
            <td className="rules-table-cell">{this.props.description}</td>
            <td className="rules-table-cell">{this.props.fundmap}</td>
            <td className="rules-table-cell">{this.state.dateTimestamp}</td>
        </tr>
    );
    }
}

export default RulesTableRow;