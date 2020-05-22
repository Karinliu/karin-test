import React, { Component } from 'react';
import {Title, Header, GrayBlockItem} from '../components/';
import {myAccount, calendar} from '../assets'

class AllExpenses extends Component {
    render() {

        const allExpensesItems = myAccount.all_expenses.map(data =>
                    <GrayBlockItem 
                    addClass = "item-overview col"
                    class = {data.class}
                    title = {data.title} 
                    total_price = {data.total_price}/>
        )   

        return (
        	 <>
            <Header text="Terug"
                    textLink ="/Overview"/>
            <div className="container overview-expenses-page">
              <Title classes="header-title" text="Alle uitgaven"/> 
              <div className="row">
                <h2><span aria-hidden="true"><img src={calendar} alt="calendar"/></span>Wat heb ik uitgegeven</h2>
              </div>
              <div className="row">
                {allExpensesItems}
              </div>
            </div>

            </>
        )
    }
}

export default AllExpenses