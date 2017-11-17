import React, { Component } from 'react';

export default class List extends Component {
  render() {
    const { bunnies } = this.props;
    return(
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {bunnies.map((bunny) => <ListItem title={bunny.title} description={bunny.description} url={bunny.url}/>)}
        </tbody>
      </table>
    );
  }
}

class ListItem extends Component {
  render() {
    const { title, description, url } = this.props;
    return(
      <tr className="one">
        <td><a href={url}>{ title }</a></td>
        <td>{ description }</td>
      </tr>
    );
  }
}