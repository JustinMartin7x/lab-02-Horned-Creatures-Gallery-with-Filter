import './styles/App.css';
import images from './data.js'
import CreatureList from './CreatureList.js'
import React, { Component } from 'react';

export default class App extends Component {





  render() {
    return (
      <>
        <div className="App" >
          <header className="App-header">
            <div>Welcome to Horned Beasts Gallery</div>
          </header>
        </div>
        <div className="container">
          <CreatureList images={images}
          />
        </div>

      </>
    );
  }
}
