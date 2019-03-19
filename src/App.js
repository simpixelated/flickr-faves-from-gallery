import React, { Component } from 'react';
import _ from 'lodash';
import './App.css';
import photos from './photos.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        {_.uniqBy(photos, 'id').map(photo => (
          <a href={`https://www.flickr.com/photos/${photo.owner}/${photo.id}`}>
            <img
              alt={photo.title}
              src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
            />
          </a>
        ))}
      </div>
    );
  }
}

export default App;
