import React, { Component } from 'react';

import List from './List';
import Thumbnail from './Thumbnail';
import Gallery from './Gallery';

class View extends Component {
  

  
  
  render() {
		const { bunnies, view, handleUpdateView } = this.props;
		let pageView;
		if (view==='list') {pageView=(<List bunnies={bunnies}/>);}
		if (view==='thumbnail') {pageView=(<Thumbnail bunnies={bunnies}/>);}
		if (view==='gallery') {pageView=(<Gallery bunnies={bunnies}/>);}
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Cute Bunnies!</h1>
        </header>
        <div>
          <p className="App-intro">
            Select which view of cute bunnies you would like.
          </p>
          <button className="button" onClick={() => handleUpdateView('list')}>List View</button>
          <button className="button" onClick={() => handleUpdateView('thumbnail')}>Thumbnail</button>
          <button className="button" onClick={() => handleUpdateView('gallery')}>Gallery</button>
          { pageView }
        </div>
      </div>
    );
  }
}

export default View;