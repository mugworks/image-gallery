import React, { Component } from 'react';
import './App.css';
import View from './View';
// import Gallery from './Gallery';

	
class App extends Component {	
  constructor() {
    super();
    this.state = {
      bunnies: [
        {
          title: 'bunny1',
          description: 'cute',
          url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
        }, 
        {
          title: 'bunny2',
          description: 'great',
          url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-25__605.jpg',
        },
        {
          title: 'bunny3',
          description: 'good',
          url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-110__605.jpg',
        },
      ],
      view: 'list'
    };
  }
	
	handleUpdateView = (view) => {
	  console.log('handle updateview', view);
	  this.setState({ view });	
	}
	
	render(){
	  return(
	    <View bunnies={this.state.bunnies} view={this.state.view} handleUpdateView={this.handleUpdateView}/>
	  // <Gallery/>
	  );
	}
}
export default App;
