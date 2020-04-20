import React, { Component } from 'react'

class MoneyBlock extends Component {
	render() {
		return(
			<>
           	<div className="row">
           	    <div className="col col-md-8 col-lg-5 money-block">
           	        <p>Te besteden deze maand</p>
           	        <p className="money">€ {this.props.toSpend}</p>
           	        <p>van de <span>€ {this.props.allMoney}</span></p>
           	    </div>
     		</div>	
     		</>
      )
  }
}
export default MoneyBlock