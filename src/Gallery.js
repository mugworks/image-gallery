import React, { Component } from 'react';

export default class Gallery extends Component {
  render() {
    const { bunnies } = this.props;
    return(
      <img alt="bunny" src={bunnies[0].url}/>
    );
  }
}