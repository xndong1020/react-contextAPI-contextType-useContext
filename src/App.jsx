import React, { Component } from 'react'
import './App.css'
import Parent from './Components/Parent'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">Welcome to React</div>
        <Parent />
      </React.Fragment>
    )
  }
}

export default App
