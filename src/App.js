import React, { Component } from 'react';

import './App.css';
import View from './View';
import List from './List';
import { 
  BrowserRouter as Router, 
  Route, Switch, Redirect, Link } from 'react-router-dom';
import Header from './Header';

	
class App extends Component {	

  render(){
    return(
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route path="/views" component={View}/>
            <Route path="/images" component={List}/>
            <Redirect to="/"/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

const Home = () => (
  <div>
    <View/>
    <Link to="/views"></Link>
  </div>
);

const About = () => (
  <div>
    <h1>About Bunnies</h1>
    <p>Bunnies are spectacularly cute. But did you know that when a home houses 50 bunnies, the home is spectacularly smelly?</p>
  </div>
);

// const NewView = () => (
//   <div>
//     <View bunnies={this.state.bunnies} view={this.state.view} handleUpdateView={this.handleUpdateView}/>
//     <h3>hey bunny</h3>
//   </div>
// );
