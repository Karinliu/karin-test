import React, { Component } from 'react'
import {myAccount} from '../assets/';

class MoneyBlock extends Component {
	render() {

    const moneyToSpend = myAccount.my_account.map(data =>
                data.total_money)

		return(
			<>
           	<div className="row">
           	    <div className="col col-md-10 col-lg-6 money-block">
           	        <p>Te besteden deze {this.props.timeDate}</p>
           	        <p className="money">€ {this.props.toSpend}</p>
           	        <p>van de <span>€ {moneyToSpend}</span></p>
           	    </div>
     		</div>	
     		</>
      )
  }
}
export default MoneyBlock