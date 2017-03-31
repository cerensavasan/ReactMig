import React from 'react';

class SidenavOpened extends React.Component {
  
  constructor() {
    super();
  }
  
  render(){
  return (
    <div className="opened-sidenav-container">
  			<img src="/images/actionbar/noun-707192-sleep.svg"/>
  			<div className="btn-group" data-toggle="buttons">
  				<label className="btn btn-primary active">
    				<input type="radio" name="options" id="option1" autoComplete="off" checked/> Awake
  				</label>
  				<label className="btn btn-primary">
    				<input type="radio" name="options" id="option2" autoComplete="off"/> Snooze
  				</label>
			</div>
  			<img src="/images/actionbar/noun-737763-person.svg"/>
  			<img src="/images/actionbar/noun-404-calendar.svg"/>
  			<img src="/images/actionbar/noun-114056-flag.svg"/>
  			<img src="/images/actionbar/noun-334301-forward.svg"/>
  			<img src="/images/actionbar/noun-131915-paperclip.svg"/>
  			<img src="/images/actionbar/noun-799140-note.svg"/>
		</div>
    );
  }
}

export default SidenavOpened;