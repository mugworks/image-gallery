import React, { Component } from 'react';
import { addAlbum } from '../action-albums';

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

  handleAddAlbum = async(album) => {
    const albumName = await fetch('/api/albums', {
      method: 'post',
      body: JSON.stringify(album),
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
    }).then(response => response.json());
    const newState = addAlbum(this.state, albumName);
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
            {this.state.albums.map(album => <ListItem key={album._id} id={album._id} name={album.name} onRemove={onRemove}/>)}
          </tbody>
        </table>
        <AddAlbum onAddAlbum={this.handleAddAlbum}/>   
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

class AddAlbum extends Component {
  render() {
    const { onAddAlbum } = this.props;
    return (
      <form id="form" onSubmit={event => {
        event.preventDefault();
        const { elements } = event.target;
        console.log('album', elements);
        const addedAlbum = {
          name: elements.name.value
        };
        onAddAlbum(addedAlbum);
        elements.name.value='';
      }}>
        <fieldset>
          <legend>Add an album</legend>
          <label>Album Name: </label>
          <input className="form-input" name="name"/>
          <button className="button add" type="submit">Add</button>
        </fieldset>
      </form>
    ); 
  }
}