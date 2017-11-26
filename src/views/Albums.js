import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { addAlbum } from '../action-albums';
// import { removeAlbum } from '../action-albums';

export default class Albums extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     albums: []
  //   };
  // }

  // async componentDidMount() {
  //   const albums = await fetch('/api/albums').then(response => response.json());
  //   const newState = { ...this.state, albums };
  //   this.setState(newState);
  // }

  // handleAddAlbum = async(album) => {
  //   const albumName = await fetch('/api/albums', {
  //     method: 'post',
  //     body: JSON.stringify(album),
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-type': 'application/json'
  //     }
  //   }).then(response => response.json());
  //   const newState = addAlbum(this.state, albumName);
  //   this.setState(newState);
  // }

  // handleRemoveAlbum = async(id) => {
  //   await fetch(`/api/albums/${id}`, {
  //     method: 'delete',
  //   }).then(response => response.json());
  //   const newState = removeAlbum(this.state, id);
  //   this.setState(newState);
  // }

  render() {
    const { albums, onAddAlbum, onRemove } = this.props;
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
            {albums.map(album => <ListItem key={album._id} id={album._id} name={album.name} onRemove={onRemove}/>)}
          </tbody>
        </table>
        <AddAlbum onAddAlbum={onAddAlbum}/>   
      </div>
    );
  }
}

class ListItem extends Component {
  
  render() {
    const { id, name, onRemove } = this.props;
    return(
      <tr>
        <td><Link to={`/albums/${id}`}>{ name }</Link></td>
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