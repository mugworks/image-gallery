import React, { Component } from 'react';

import List from './List';

class View extends Component {
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

  //   handleOnClick
  
  render() {
    const bunnies = this.state.bunnies;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Cute Bunnies!</h1>
        </header>
        <p className="App-intro">
            Select which view of cute bunnies you would like.
        </p>
        <button className="button">List View</button>
        <button className="button">Thumbnail</button>
        <button className="button">Gallery</button>
        <List bunnies={bunnies}/>
      </div>
    );
  }
}

export default View;