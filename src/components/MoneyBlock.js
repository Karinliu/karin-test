import React, { Component } from 'react'

class MoneyBlock extends Component {
	render() {

    let today = new Date();
    let date = today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+ today.getFullYear();
    console.log(date);

    // const moneyToSpend = myAccount.my_account.map(data =>
    //             data.total_money)

		return(
			<>
           	<div className="row">
           	    <div className="col col-md-10 col-lg-6 money-block">
           	        <p className={this.props.addClass}>{this.props.timeDate} <span className="boldText">{this.props.boldText}</span></p>
           	        <p className="money">€ {this.props.toSpend}</p>
           	        <p> Datum van vandaag: <span>{date}</span></p>
                </div>
     		</div>	
     		</>
      )
  }
}
export default MoneyBlock