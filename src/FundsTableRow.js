import React from 'react';

class FundsTableRow extends React.Component {
    
    constructor() {
        super();
        this.state = {checked: false, classRow: "unhighlighted-funds-table-row"};
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange() {
    this.setState({
      checked: !this.state.checked
    });
    if(this.state.checked == true) {
        this.state.classRow = "unhighlighted-funds-table-row";
    } else if(this.state.checked == false) {
       this.state.classRow = "highlighted-funds-table-row";
    }
    console.log("changed element className for table row");
  }

    render(){
    return (
        <tr className={this.state.classRow}>
            <td className="vcenter"><input type="checkbox" className="css-checkbox" checked={this.state.checked} onChange={this.handleChange} id={this.props.inputID}/><label className="css-label" htmlFor={this.props.inputID}></label></td>
            <td className="funds-table-cell">{this.props.fundname}</td>
            <td className="funds-table-cell">{this.props.nav}</td>
            <td className="funds-table-cell">{this.props.changenav}</td>
            <td className="funds-table-cell">{this.props.difference}</td>
            <td className="funds-table-cell">{this.props.numberBreaches}</td>
        </tr>
    );
    }
}

export default FundsTableRow;