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
            <Header text="Home"
                    textLink ="/Overview"/>
            <div className = "container home-page" >
                <Title classes="header-title" text="Overzicht"/> 
                
                <MoneyBlock
                    timeDate ="maand"
                    toSpend={moneyToSpend}/>

                <div className="row carousel">
                    <div className="col slide" id="slide-1">
                        <label> 
                            {/*<input type="radio" id="slide" name="slide"/>*/}
                            <h2><span aria-hidden="true"><img src={piggybank} alt="piggybank"/></span>Spaarpot</h2>
                            <div className="item-overview">
                            <p className="piggybank">Stop geld in je spaarpot! :)</p>
                         </div>

                            <Link to="/sparen">Ga naar mijn spaarpot <span>></span></Link>
                            <nav className="carousel-dots">
                                <ul>
                                    <li><a className="selected" href="#slide-1" >Go to first slide</a></li>
                                    <li><a href="#slide-2">Go to first slide</a></li>
                                    <li><a href="#slide-3">Go to third slide</a></li>
                                </ul>
                            </nav>
                        </label>
                        <a href="#slide-3" className="carousel-prev">Go to last slide</a>
                        <a href="#slide-2" className="carousel-next">Go to second slide</a>
                    </div>

                    <div className="col slide" id="slide-2">
                        <label> 
                            {/*<input type="radio" id="slide" name="slide"/>*/}
                            <h2><span aria-hidden="true"><img src={calendar} alt="calendar"/></span>Wat heb ik uitgegeven</h2>
                            {allExpensesFirstItem}

                            <Link to="/Uitgegeven">Ga naar overzicht wat al is uitgegeven <span>></span></Link>
                            <nav className="carousel-dots">
                                <ul>
                                    <li><a href="#slide-1" >Go to first slide</a></li>
                                    <li><a className="selected" href="#slide-2">Go to first slide</a></li>
                                    <li><a href="#slide-3">Go to third slide</a></li>
                                </ul>
                            </nav>
                        </label>
                         <a href="#slide-1" className="carousel-prev">Go to first slide</a>
                            <a href="#slide-3" className="carousel-next">Go to third slide</a>
                    </div>

                    <div className="col slide" id="slide-3">
                        <label> 
                            <h2><span aria-hidden="true"><img src={shoppingcart} alt="shoppingcart"/></span>Dit ga ik nog halen</h2>
                            {extraExpensesFirstItem}

                            <Link
                              to={{
                                pathname: "/NogUitgeven",
                                data: data // your data array of objects
                              }}
                            >

                            Ga naar overzicht wat ik nog ga halen <span>></span></Link>
                            <nav className="carousel-dots">
                                <ul>
                                    <li><a href="#slide-1" >Go to first slide</a></li>
                                    <li><a href="#slide-2">Go to first slide</a></li>
                                    <li><a className="selected" href="#slide-3">Go to third slide</a></li>
                                </ul>
                            </nav>
                        </label>
                        <a href="#slide-2" className="carousel-prev">Go to second slide</a>
                        <a href="#slide-1" className="carousel-next">Go to first slide</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-md-10 col-lg-6 add-activity">
                        <Link className="plus-icon btn-pink btn add-category" aria-label="Afvink lijst" to="/Toevoegen">Activiteit toevoegen</Link>
                    </div>
                </div>

                </div>
            </>
        )
    }
}

export default Overview