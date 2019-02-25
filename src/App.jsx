import React, { Component } from 'react'
import './App.css'
import Parent from './Components/Parent'
import UserContext from './context/UserContext'
import AuthContext from './context/AuthContext'

const userStore = {
  users: [
    { name: 'Jeremy Gu', age: 18 },
    { name: 'Nicole Dong', age: 17 },
    { name: 'Harper Gu', age: 1 }
  ]
}

const authStore = {
  isAuthenticated: true,
  name: 'Jeremy Gu'
}

class App extends Component {
  render() {
    return (
      <AuthContext.Provider value={authStore}>
        <UserContext.Provider value={userStore}>
          <React.Fragment>
            <div className="App">Welcome to React</div>
            <Parent />
          </React.Fragment>
        </UserContext.Provider>
      </AuthContext.Provider>
    )
  }
}

export default App
