import React, { Component } from 'react';


export default class List extends Component {
  
  
  render() {
    const { bunnies, onRemove, onAddImg } = this.props;
    return(
      <div>
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
            {bunnies.map(bunny => <ListItem key={bunny._id} id={bunny._id} title={bunny.title} description={bunny.description} url={bunny.url} onRemove={onRemove}/>)}
          </tbody>
        </table>
        <AddImg onAddImg={onAddImg}/>
        
      </div>
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


class AddImg extends Component {
  render() {
    const { onAddImg } = this.props;
    return (
      <form onSubmit={event => {
        event.preventDefault();
        const { elements } = event.target;
        const addedImage = {
          title: elements.title.value,
          description: elements.description.value,
          url: elements.url.value
        };
        onAddImg(addedImage);
        elements.title.value='';
        elements.description.value='';
        elements.url.value='';
      }}>
        <label>Image Title: </label>
        <input name="title"/>
        <label>Description: </label>
        <input name="description"/>
        <label>Url: </label>
        <input name="url"/>
        <button type="submit">Add</button>
      </form>
    ); 
  }
}



