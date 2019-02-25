import React, { Component } from 'react'
import UserContext from '../context/UserContext'

export default class GrandChild extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {({ users }) => {
          return (
            <div>
              <p>
                This is grand child component, I also can see there are{' '}
                {users.length} users in the context
              </p>
            </div>
          )
        }}
      </UserContext.Consumer>
    )
  }
}
