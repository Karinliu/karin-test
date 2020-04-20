import React, { Component } from 'react'

class Title extends Component {
  testMethod = ()=>{
    console.log('alert')
  }
  render() {
    return (
    	<div className="row">
    		<h1 className={this.props.classes}>{this.props.text}</h1>
    	</div>)
  }
}
export default Title