import React, { Component } from 'react';

export default class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      index: 0, 
      valueLeft: true,
      valueRight: false
    };
  }

  handlePreviousImage() {
    this.setState((prevState) => {
      const index = prevState.index - 1;
      const valueLeft = (index === 0) ? true : false;
      return { index, valueLeft };
    });
  }

  handleNextImage() {
    this.setState((prevState, props) => {
      const index = prevState.index + 1;
      const valueRight = (index === props.bunnies.length - 1) ? false : true;
      return { index, valueRight };
    });
  }


  render() {
    const { bunnies } = this.props;
    return(
      <div>
        <button className="previous" disabled={this.state.valueLeft} onClick={() => this.handlePreviousImage()}>Previous</button>
        <img alt="bunny" src={bunnies[this.state.index].url}/>
        <button className="next" disabled={this.state.valueRight} onClick={() => this.handleNextImage()}>Next</button>
      </div>
    );
  }
}
