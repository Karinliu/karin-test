import React, { Component } from 'react';
import {Title, Header, GrayBlockItem} from '../components/';
import {myAccount, todo} from '../assets'
import { Link } from 'react-router-dom';

class ExtraExpenses extends Component {
        // constructor(props) {
        // super(props);
        //     this.state = {
        //         items: [],
        //     }
        // }

        // allItems(){
        //     let data = this.props.location.myItems

        //     const dataNew = data.map(data =>{
        //         console.log(data.id_item)

        //         return data.id_item
        //     })

        //     console.log(dataNew)

        //     const items = [...this.state.items, dataNew]

        //     this.setState({
        //         items: items
        //     })

        // }

    render() {
        const extraExpensesItems = myAccount.extra_expenses.map(data =>
                <Link to="/BevestigenUitgave">
                <GrayBlockItem 
                    addClass="item-overview col"
                    class = {data.class}
                    title = {data.title} 
                    total_price = {data.total_price}/>
                </Link>
        )   

        let data = this.props.location.myItems

        if (typeof data === 'undefined') {
          // color is undefined
          console.log('oops')
        }
        else{
            let data = this.props.location.myItems

            const dataNew = data.map(data =>{
                console.log(data.id_item)

                return data.id_item
            })

            console.log(dataNew)
        }


        return (
        	 <>
            <Header text="Terug"
                    textLink ="/Overview"/>
            <div className="container overview-expenses-page">
              <Title classes="header-title" text="Nog halen"/> 
                <div className="row">
                <h2><span aria-hidden="true"><img src={todo} alt="checklist"/></span>Wat ga ik nog halen</h2>
                </div>
              <div className="row">
                {extraExpensesItems}
              </div>

              <div className="row btn-row">
                <div className="col">
                <p>Ik heb iets gekocht wat niet in mijn lijstje staat</p>
                    <Link to="/ToevoegenBevestigenUitgave" className="plus-icon btn btn-pink">Nog toevoegen</Link>
                </div>
              </div>
            </div>

            </>      

        )
    }
}

export default ExtraExpenses