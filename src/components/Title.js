import React, { Component } from 'react'

class Title extends Component {
  testMethod = ()=>{
    console.log('alert')
  }
  render() {
    return <h1 onClick={() => this.testMethod()}>{this.props.text}</h1>
  }
}
export default Title