import React, { Component } from 'react';

export default class Albums extends Component {
  constructor() {
    super();
    this.state = {
      albums: []
    };
  }

  async componentDidMount() {
    const albums = await fetch('/api/albums').then(response => response.json());
    const newState = { ...this.state, albums };
    this.setState(newState);
  }

  render() {
    return(
      <div>
        <table id="table">
          <thead>
            <tr>
              <th>Albums</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* {albums.map(album => <ListItem key={album._id} id={album._id} title={album.title}  onRemove={onRemove}/>)} */}
            {this.state.albums.map(album => <ListItem key={album._id} id={album._id} name={album.name}  />)}
          </tbody>
        </table>
        {/* <AddImg onAddImg={onAddImg}/>    */}
      </div>
    );
  }
}

class ListItem extends Component {
  
  render() {
    const { id, name, onRemove } = this.props;
    return(
      <tr>
        <td>{ name }</td>
        <td><button className="button remove" onClick={() => onRemove(id)}>Remove</button></td>
      </tr>
    );
  }
}