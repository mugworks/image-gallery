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
            <th>Url</th>
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
      <tr>
        <td>{ title }</td>
        <td>{ description }</td>
        <td>{ url }</td>
      </tr>
    );
  }
}