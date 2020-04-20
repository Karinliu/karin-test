import React, { Component } from 'react'

class TitleCategory extends Component {
  render() {
    return (
    	<>
    		<div className="row">
    			<div className="col">
    				<h2>{this.props.title}</h2>
    			</div>
    		</div>
		</>
    	)
  }
}
export default TitleCategory