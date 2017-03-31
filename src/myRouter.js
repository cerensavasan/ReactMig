import React from 'react';
import NavButton from './NavButton';

import Dashboard from './Dashboard';
import Reports from './Reports';
import Rules from './Rules';
import Funds from './Funds';
import BreachResults from './BreachResults';
import Tasks from './Tasks';

import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router'


class myRouter extends React.Component {

	constructor() {
    super();
  }

	render(){
	return (

  <div id="beginNavigation">
  <Router history={browserHistory}>
   <Route exact path="/" component={Dashboard}/>
      <Route path="/funds" component={Funds} />
      <Route path="/reports" component={Reports} />
      <Route path="/results" component={BreachResults} />
      <Route path="/rules" component={Rules} />
      <Route path="/tasks" component={Tasks} />
  </Router> 
  </div>
	);
	}
}

export default myRouter;