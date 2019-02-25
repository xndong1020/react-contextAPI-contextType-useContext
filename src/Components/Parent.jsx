import React, { Component } from 'react'
import Child from './Child'
import UserContext from '../context/UserContext'

export default class Parent extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {context => (
          <div>
            <p>
              This is parent component, I can see there are{' '}
              {context.users.length} users in the context
            </p>
            <Child />
          </div>
        )}
      </UserContext.Consumer>
    )
  }
}
