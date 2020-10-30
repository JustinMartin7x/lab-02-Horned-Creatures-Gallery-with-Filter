import './styles/App.css';
import images from './data.js'
import CreatureList from './CreatureList.js'
import React, { Component } from 'react';

export default class App extends Component {


  state = {
    filter: ''
  }
  handleChange = e => {
    this.setState({
      filter: e.target.value
    });
  }
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
            filter={this.state.filter} />
        </div>

      </>
    );
  }
}
