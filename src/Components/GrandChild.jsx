import React, { Component } from 'react'
import UserContext from '../context/UserContext'

export default class GrandChild extends Component {
  static contextType = UserContext

  componentDidMount() {
    console.log('I have access to context now', this.context.users)
  }
  render() {
    return (
      <p>
        This is grand child component, I also can see there are{' '}
        {this.context.users.length} users in the context
      </p>
    )
  }
}
