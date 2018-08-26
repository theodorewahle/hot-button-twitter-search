import React, { Component } from 'react';
import './App.css';

import TwitterFeed from './components/TwitterFeed'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div>
          <TwitterFeed tweets={[]} />
        </div>
      </div>
    );
  }
}

export default App;
