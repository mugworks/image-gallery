import React, { Component } from 'react';


export default class List extends Component {

  
  render() {
    const { bunnies, onRemove } = this.props;
    return(
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {bunnies.map(bunny => <ListItem id={bunny._id} title={bunny.title} description={bunny.description} url={bunny.url} onRemove={onRemove}/>)}
        </tbody>
      </table>
    );
  }
}

class ListItem extends Component {

  render() {
    const { id, title, description, url, onRemove } = this.props;
    return(
      <tr className="one">
        <td>{ id }</td>
        <td><a href={url}>{ title }</a></td>
        <td>{ description }</td>
        <td><button onClick={() => onRemove(id)}>Remove</button></td>
      </tr>
    );
  }
}

