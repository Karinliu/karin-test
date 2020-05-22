import React, { Component } from 'react'

class HeaderMoney extends Component {
  render() {
    return(
    	<div className="container to-spend">
    		<div className="row">
    			<p className="col">{this.props.textFirst} <span>{this.props.textDate}</span> {this.props.textEnd}</p>
    			<p className="col">€ {this.props.toSpend}</p>
    		</div>
    	</div>

    )
  }
}
export default HeaderMoney