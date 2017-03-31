import React from 'react';
import FilterContainer from './FilterContainer';


class FilterButtonGroup extends React.Component {
  render() {
    if(this.props.opt5){
        return (

    <div className="col-sm-6 col-md-3 col-lg-8ths">
        <h4 className="collapsing-filter-heading"> {this.props.heading} </h4>        
        <div id="tab" className="btn-group-vertical" data-toggle="buttons-radio">
            <button className="btn btn-large btn-collapsable-filter active">{this.props.opt1}</button>
            <button className="btn btn-large btn-collapsable-filter" data-toggle="tab">{this.props.opt2}</button>
            <button className="btn btn-large btn-collapsable-filter" data-toggle="tab">{this.props.opt3}</button>
            <button className="btn btn-large btn-collapsable-filter"  data-toggle="tab">{this.props.opt4}</button>
            <button className="btn btn-large btn-collapsable-filter"  data-toggle="tab">{this.props.opt5}</button>
        </div>
    </div>);
    }
    if(!this.props.opt5 && this.props.op4){
    return (
    <div className="col-sm-6 col-md-3 col-lg-8ths">
        <h4 className="collapsing-filter-heading"> {this.props.heading} </h4>   
        <div id="tab" className="btn-group-vertical" data-toggle="buttons-radio">
            <button className="btn btn-large btn-collapsable-filter active">{this.props.opt1}</button>
            <button className="btn btn-large btn-collapsable-filter" data-toggle="tab">{this.props.opt2}</button>
            <button className="btn btn-large btn-collapsable-filter" data-toggle="tab">{this.props.opt3}</button>
            <button className="btn btn-large btn-collapsable-filter"  data-toggle="tab">{this.props.opt4}</button>
        </div>
    </div>);
  }
  else {
    return (
    <div className="col-sm-6 col-md-3 col-lg-8ths">
        <h4 className="collapsing-filter-heading"> {this.props.heading} </h4>   
        <div id="tab" className="btn-group-vertical" data-toggle="buttons-radio">
            <button className="btn btn-large btn-collapsable-filter active">{this.props.opt1}</button>
            <button className="btn btn-large btn-collapsable-filter" data-toggle="tab">{this.props.opt2}</button>
            <button className="btn btn-large btn-collapsable-filter" data-toggle="tab">{this.props.opt3}</button>
        </div>
    </div>);
  }
  }
}


class CollapsingFilter extends React.Component {
  
  constructor() {
    super();
    this.state = {
      open: false
    };
    this.toggleIcon = this.toggleIcon.bind(this);  
  }
  
  toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
    }

  render(){
  return (
    <div className="panel panel-default">
        <div className="panel-heading container-fluid" role="tab" id="headingOne">
            <FilterContainer />
        </div>
        <div id="advanced-filter-container" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
            <div className=" row panel-body justify-content-around gradient-circular-blue">
                <FilterButtonGroup heading="TIME PERIOD" opt1="Yesterday" opt2="Past 3 days" opt3="Past 10 days" opt4="Custom Date"/>
                <FilterButtonGroup heading="STAGE" opt1="Not Yet Reviewed" opt2="1st Review" opt3="2nd Review" opt4="Resolved" opt5="Closed"/>
                <FilterButtonGroup heading="STATUS" opt1="Active Breaches" opt2="Passive Breaches" opt3="False Breaches"/>
                <FilterButtonGroup heading="ASSIGNMENT" opt1="Unassigned" opt2="Assigned to Me" opt3="IT Team" opt4="XYZ Team" opt5="More..."/>
                <FilterButtonGroup heading="COMPANY" opt1="All Companies" opt2="State Street" opt3="Banco Santander" opt4="Bank of America" opt5="More..."/>
                <FilterButtonGroup heading="FREQUENCY" opt1="Yesterday" opt2="Past 3 days" opt3="Past 10 days" opt4="Custom Date"/>
                <div className="col-sm-6 col-md-3 col-lg-8ths"></div>
                <div className="col-sm-6 col-md-3 col-lg-8ths">
                    <button className="btn-primary save-advanced-filter">❤ SAVE FILTER</button>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default CollapsingFilter;