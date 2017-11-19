import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    this.setState((prevState, props) => {
      const index = prevState.index - 1;
      const valueLeft = (index === 0) ? true : false;
      const valueRight = (index < props.bunnies.length) ? false : true;
      return { index, valueLeft, valueRight };
    });
  }

  handleNextImage() {
    this.setState((prevState, props) => {
      const index = prevState.index + 1;
      const valueRight = (index < (props.bunnies.length - 1)) ? false : true;
      const valueLeft = (index > 0) ? false : true;
      return { index, valueRight, valueLeft };
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

Gallery.proptypes = {
  valueLeft: PropTypes.boolean,
  valueRight: PropTypes.boolean,
  handlePreviousImage: PropTypes.func,
  handleNextImage: PropTypes.func
};
