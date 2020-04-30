import React, { Component } from 'react';
import {Title, Header, MoneyBlock} from '../components/';
import { Link } from 'react-router-dom';
import {piggybank, calendar, checklist} from '../assets'
import {myAccount} from '../assets/';

class Overview extends Component {

    render() {
        const moneyToSpend = myAccount.my_account.map(data =>
                data.total_money*0.8)

        return ( 
            <>
            <Header text="Home"
                    textLink ="/Overview"/>
            <div className = "container" >
                <Title classes="header-title" text="Overzicht"/> 
                
                <MoneyBlock
                    toSpend={moneyToSpend}/>

                <div class="row carousel">
                    <div className="col slide" id="slide-1">
                        <label> 
                            {/*<input type="radio" id="slide" name="slide"/>*/}
                            <h2><span aria-hidden="true"><img src={piggybank} alt="piggybank"/></span>Spaarpot</h2>
                            <p>Tekst</p>

                            <Link to="/sparen">Ga naar mijn spaarpot <span>></span></Link>
                        </label>
                        <a href="#slide-3" class="carousel-prev">Go to last slide</a>
                        <a href="#slide-2" class="carousel-next">Go to second slide</a>
                    </div>

                    <div className="col slide" id="slide-2">
                        <label> 
                            {/*<input type="radio" id="slide" name="slide"/>*/}
                            <h2><span aria-hidden="true"><img src={calendar} alt="caledar"/></span>Alle uitgaven</h2>
                            <p>Tekst</p>

                            <Link to="/sparen">Ga naar overzicht alle uitgaven <span>></span></Link>
                        </label>
                         <a href="#slide-1" class="carousel-prev">Go to first slide</a>
                            <a href="#slide-3" class="carousel-next">Go to third slide</a>
                    </div>

                    <div className="col slide" id="slide-3">
                        <label> 
{/*                            <input type="radio" id="slide" name="slide"/>*/}
                            <h2><span aria-hidden="true"><img src={checklist} alt="checklist"/></span>Extra uitgaven</h2>
                            <p>Tekst</p>

                            <Link to="/sparen">Ga naar overzicht extra uitgaven <span>></span></Link>
                        </label>
                        <a href="#slide-2" class="carousel-prev">Go to second slide</a>
                        <a href="#slide-1" class="carousel-next">Go to first slide</a>
                        <Link className="btn-pink btn add-category" aria-label="Afvink lijst" to="/Toevoegen">Toevoegen</Link>
                    </div>
                </div>
{/*                    <div className="row carousel-navigation">
                        <ol>
                          <li>
                            <label>
                                <a href="#slide-1">
                                    <input id="slide" name="slide" type="radio"/>
                                    <span>Go to slide 1 </span>
                                </a>
                            </label>
                          </li>
                          <li>
                            <label>
                            
                                <a href="#slide-2">
                                    <input id="slide" name="slide" type="radio"/>
                                    <span>Go to slide 2</span>
                                </a>
                            </label>
                          </li>
                          <li>
                            <label>
                                <a href="#slide-3">
                                    <input id="slide" name="slide" type="radio"/>
                                    <span>Go to slide 3</span>
                                </a>
                            </label>
                          </li>
                        </ol>
                    </div>*/}

                </div>
            </>
        )
    }
}

export default Overview