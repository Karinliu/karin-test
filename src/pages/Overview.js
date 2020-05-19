import React, { Component } from 'react';
import {Title, Header, MoneyBlock, GrayBlockItem} from '../components/';
import { Link } from 'react-router-dom';
import {piggybank, calendar, shoppingcart} from '../assets'
import {myAccount} from '../assets/';

class Overview extends Component {
    render() {
        const moneyToSpend = myAccount.my_account.map(data =>
                data.total_money*0.8)

        const allExpensesFirstItem = myAccount.all_expenses.map(data =>
                <GrayBlockItem 
                    addClass = "item-overview"
                    class = {data.class}
                    title = {data.title} 
                    total_price = {data.total_price}/>
                )[0]   

        const extraExpensesFirstItem = myAccount.extra_expenses.map(data =>
                <GrayBlockItem 
                    addClass = "item-overview"
                    class = {data.class}
                    title = {data.title} 
                    total_price = {data.total_price}/>
                )[0]    


        let data = this.props.location.myItems

        

        if (typeof data === 'undefined') {
          // color is undefined
          console.log('oops')
        }
        else{
            data.map(data =>{
                console.log(data.id_item)
            })
        }

        return ( 
            <>
            <Header text=""
                    textLink =""/>
            <div className = "container home-page" >
                <Title classes="header-title" text="Overzicht"/> 
                

                <div className="row carousel">

                                    <div className="col slide" id="slide-2">
                    <nav className="sub-header">
                        <ul>
                            <li><a href="#slide-1" >Spaarpot</a></li>
                            <li><a href="#slide-2" className="selected">Inkomsten</a></li>
                            <li><a href="#slide-3">Uitgaven</a></li>            
                        </ul>
                    </nav>
                    <MoneyBlock
                        timeDate ="maand"
                        toSpend={moneyToSpend}/>
                        <label className=""> 
           
                        <Link className="add-activity plus-icon btn-pink btn add-category" aria-label="Afvink lijst" to="/Toevoegen">Activiteit toevoegen</Link>
     
                        </label>
                    </div>


                    <div className="col slide" id="slide-1">
                    <nav className="sub-header">
                        <ul>
                            <li><a href="#slide-1" className="selected">Spaarpot</a></li>
                            <li><a href="#slide-2">Inkomsten</a></li>
                            <li><a href="#slide-3">Uitgaven</a></li>            
                        </ul>
                    </nav>
                <MoneyBlock
                    addClass="text-none"/>
        
                        <label> 
                            {/*<input type="radio" id="slide" name="slide"/>*/}
                            <h2><span aria-hidden="true"><img src={piggybank} alt="piggybank"/></span>Stop geld in je spaarpot!</h2>

                            <Link className="add-activity btn-pink btn add-category" aria-label="Nog uitgeven" to="/sparen">Ga naar sparen</Link>
                        </label>
                    </div>



                    <div className="col slide" id="slide-3">
                    <nav className="sub-header">
                        <ul>
                            <li><a href="#slide-1" >Spaarpot</a></li>
                            <li><a href="#slide-2">Inkomsten</a></li>
                            <li><a href="#slide-3" className="selected">Uitgaven</a></li>                    
                        </ul>
                    </nav>
                    <MoneyBlock
                    addClass="text-none"/>
                        <label> 
                            <Link className="calendar-icon add-activity btn-pink btn add-category" aria-label="Nog uitgeven" to="/Uitgegeven">Al uitgegeven</Link>             

                            <Link className="to-do add-activity btn-pink btn add-category" aria-label="Nog uitgeven" to="/NogUitgeven">Nog halen</Link>
                        </label>

                    </div>
                </div>

                </div>
            </>
        )
    }
}

export default Overview