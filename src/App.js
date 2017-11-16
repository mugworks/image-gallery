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
          url: 'bunn.jpg',
        }, 
        {
          title: 'bunny2',
          description: 'great',
          url: 'bunny.jpg',
        },
        {
          title: 'bunny3',
          description: 'good',
          url: 'rabbit.jpg',
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
