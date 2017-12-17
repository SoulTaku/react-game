import React, { Component } from 'react';
import Battle from './Battle';

class App extends Component {
  render() {
    return(
      <div className="container">
        <Battle place="col-md-4 col-md-offset-4" />
      </div>
    );
  }
}

export default App
