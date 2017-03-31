import React from 'react';
import FundsCard from './FundsCard';
import FundsInformer from './FundsInformer';

class FundsCardHolder extends React.Component {
	
	constructor() {
    super();
  	}

	render(){
	return (
		<div className="row" id="funds-card-holder">
			<div className="col-sm-4 col-md-2 col-lg-5ths" id="card1">
				<FundsCard SourceOfImage="/images/bank.png" Desc="COMPANY WITH MOST BREACHED FUNDS" OptionName="Banco Santander" coloradder="blue-header"/>
			</div>
			<div className="col-sm-4 col-md-2 col-lg-5ths" id="card2">
				<FundsInformer Head="207" Desc="BREACHED FUNDS"/>
			</div>
			<div className="col-sm-4 col-md-2 col-lg-5ths" id="card3">
				<FundsCard SourceOfImage="/images/money.png" Desc="FUND WITH MOST BREACHES" OptionName="ABC Fund II"/>
			</div>
			<div className="col-sm-4 col-md-2 col-lg-5ths" id="card4">
				<FundsInformer Head="113" Desc="NAV MISMATCHES" Extra="[MIG 21 VS. BLOOMBERG]"/>
			</div>
			<div className="col-sm-4 col-md-2 col-lg-5ths" id="card5">
				<FundsCard SourceOfImage="/images/bars.png" Desc="LARGEST FUND CHANGE" OptionName="▴206% SSGM ABC Fund" coloradder="green-header"/>
			</div>
		</div>
		);
	}
}

export default FundsCardHolder;