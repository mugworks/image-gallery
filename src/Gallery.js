import React, { Component } from 'react';

export default class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      imgIndex: 0, 
      value: true
    };
  }
	
  handleNextImage(index, bunnies) {
    index = index + 1;
    if (index === bunnies.length - 1) {
      console.log('before setstate1', bunnies.length);
      this.setState({ value: false });
      console.log('before setstate2', bunnies.length);
    }
    this.setState({ imgIndex: index });
    console.log('afer setstate', bunnies.length);
  }

  render() {
    const { bunnies } = this.props;
    return(
      <div>
        <button className="previous" disabled={!this.state.value} onClick={() => this.handlePreviousImage(this.state.imgIndex, bunnies)}>Previous</button>
        <img alt="bunny" src={bunnies[this.state.imgIndex].url}/>
        <button className="next" disabled={!this.state.value} onClick={() => this.handleNextImage(this.state.imgIndex, bunnies)}>Next</button>
      </div>
    );
  }
}
