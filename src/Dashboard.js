import React from 'react';
import MyTable from './MyTable';
import MyNavbar from './MyNavbar';
import DashboardCard from './DashboardCard';
import DashboardBarGraph from './DashboardBarGraph';
import NavButton from './NavButton';
import NavHeader from './NavHeader';
import ReportsPanel from './ReportsPanel';
import ExceptionModalButton from './ExceptionModalButton';
import ExceptionDetailsModal from './ExceptionDetailsModal';
import SubnavFilter from './SubnavFilter';


class Dashboard extends React.Component {

	constructor() {
    super();
  }

	render(){
	return (
  <div id="startOfDash">
    <MyNavbar/>
    <SubnavFilter location="Dashboard" SourceOfImage="/images/noun_145325_dashboard.svg"/>

  	<div id="cardContainer">
  			<div className="row text-center" id="cardContainer-row">
   				<div className="col-sm-4 col-md-2" id="card1">
   					<DashboardCard SourceOfImage='./images/people.png' OptionName='FIRST REVIEWS NEEDED' NumberOf='270'/>
   				</div>
          <div className="col-sm-4 col-md-2" id="card2">
            <DashboardCard SourceOfImage='./images/loc.png' OptionName='SECOND REVIEWS NEEDED' NumberOf='82'/>
          </div>
          <div className="col-sm-4 col-md-2" id="card3">
            <DashboardCard SourceOfImage='./images/time.png' OptionName='PROSPECTUSES RECEIVED' NumberOf='0'/>
          </div>
          <div className="col-sm-4 col-md-2" id="card4">
            <DashboardCard SourceOfImage='./images/loc.png' OptionName='NEW FUNDS' NumberOf='1'/>
          </div>
          <div className="col-sm-4 col-md-2" id="card5">
            <DashboardCard SourceOfImage='./images/loc.png' OptionName='REPORTS NEEDED' NumberOf='4'/>
          </div>
          <div className="col-sm-4 col-md-2" id="card6">
            <DashboardCard SourceOfImage='./images/loc.png' OptionName='ASSIGNED TASKS' NumberOf='12'/>
          </div>
		    </div>
		  </div>

		  <div className="row" id="reportPanel-row">
			  <div className="col-md-5 col-sm-5" id="reportPanelContainer">
			    <ReportsPanel image1="./images/report1.png" image2="./images/report2.png" image3="./images/report3.png"/>
			  </div>
			  <div  className="col-md-5 col-sm-5" id="resultPanelContainer">
				  <ReportsPanel image1="./images/report1.png" image2="./images/report2.png" image3="./images/report3.png"/>
			  </div>
		  </div>
  		<MyTable />
  		<DashboardBarGraph />
  		<ExceptionModalButton />
  	</div>
	);
	}
}

export default Dashboard;