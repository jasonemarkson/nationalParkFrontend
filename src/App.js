import React, { Component } from 'react'
import Router from './components/Router'
import Navbar from './components/Navbar'

class App extends Component {

  render () {

    return (
      <div className="App">
        <Navbar />
        <Router />
      </div>
    );
  }
}

export default App;
