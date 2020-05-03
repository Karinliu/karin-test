import React, { Component } from 'react';
import {Title, Footer, Header, GrayBlockItem, TitleCategory} from '../components/';
import {myAccount, checklist} from '../assets'

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
                <GrayBlockItem 
                    addclass = "item-overview col"
                    class = {data.class}
                    title = {data.title} 
                    total_price = {data.total_price}/>
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
              <Title classes="header-title" text="Nog uitgeven"/> 
                <div className="row">
                <h2><span aria-hidden="true"><img src={checklist} alt="checklist"/></span>Wat ga ik nog uitgeven</h2>
                </div>
              <div className="row">
                {extraExpensesItems}
              </div>
            </div>

            <Footer/>  

            </>      

        )
    }
}

export default ExtraExpenses