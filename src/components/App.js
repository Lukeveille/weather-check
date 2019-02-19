import React, { Component } from 'react';
import Loading from '../containers/Loading'
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Loading />
        </header>
      </div>
    );
  }
}

export default App;
