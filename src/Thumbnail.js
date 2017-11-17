import React, { Component } from 'react';

export default class Thumbnail extends Component {
  render() {
    const { bunnies } = this.props;

    return(
      <div>
        {bunnies.map((bunny) => <img className="thumbnail" alt={bunny.title} src={bunny.url}/>)}
      </div>
    );
  }

}
