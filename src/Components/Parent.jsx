import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  render() {
    return (
      <div>
        <p>This is parent component</p>
        <Child />
      </div>
    )
  }
}
