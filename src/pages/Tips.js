import React, { Component } from 'react'
import {Title, Header} from '../components/';
import { Link } from 'react-router-dom';
import {MoneyBlockScreenshot} from '../assets/';


class Tips extends Component {
    render() {
        return (
             <>
            <Header text="Terug"
                    textLink ="/Overview"/>
            <div className="container tips-page">
              <Title classes="header-title" text="Tips over de app"/> 
              <div className="row information-block">
                  <div className="col">
                  <h2>Uitgaven</h2>
                    <p>Wil je prijzen veranderen? Neem contact op met Lijn5!</p>
                    <Link className="to-do add-activity btn-pink btn add-category" aria-label="Nog uitgeven" to="/Help">Contact Lijn5</Link> 
                  </div>
              </div>

            </div>
            </>
        )
    }
}

export default Tips