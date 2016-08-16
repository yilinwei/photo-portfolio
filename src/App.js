import React, { Component } from 'react';
import PhotoCard from './PhotoCard.js'
import PhotoSource from './PhotoSource.js'
import MipmapSource from './MipmapSource.js'

import logo from './logo.svg';
import './App.css';

class App extends Component {
    
    render() {
        let ps = new PhotoSource("a.jpg", 160, 160)
        let mm = new MipmapSource(ps)
        alert(mm.clampWidth(160).source);
        let v = new PhotoCard(mm)
        
    return (
      <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {v.render()}
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started,asd edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
