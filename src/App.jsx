import React, { Component } from 'react'
import './App.css'
import Parent from './Components/Parent'
import UserContext from './context/UserContext'

const store = {
  users: [
    { name: 'Jeremy Gu', age: 18 },
    { name: 'Nicole Dong', age: 17 },
    { name: 'Harper Gu', age: 1 }
  ]
}

class App extends Component {
  render() {
    return (
      <UserContext.Provider value={store}>
        <React.Fragment>
          <div className="App">Welcome to React</div>
          <Parent />
        </React.Fragment>
      </UserContext.Provider>
    )
  }
}

export default App
