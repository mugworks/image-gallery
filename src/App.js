import React, { Component } from 'react';

import './App.css';
import View from './View';
import { 
  BrowserRouter as Router, 
  Route, Switch, Link } from 'react-router-dom';

	
class App extends Component {	
  
	
	
	
	render(){
	  return(
	    <Router>
	      <Switch>
	        <Route exact path="/" component={Home}/>
          <Route path="/views" component={View}/>
	      </Switch>
	    </Router>
	  );
	}
}
export default App;

const Home = () => (
  <div>
    <Link to="/views">Check the list of image views</Link>
  </div>
);

const NewView = () => (
  <div>
    <View bunnies={this.state.bunnies} view={this.state.view} handleUpdateView={this.handleUpdateView}/>
    <h3>hey bunny</h3>
  </div>
);
