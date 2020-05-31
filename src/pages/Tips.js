import React, { Component } from 'react'
import {Title, Header} from '../components/';
import { Link } from 'react-router-dom';
import {MoneyBlockScreenshot} from '../assets/';


class Tips extends Component {
    render() {
        return (
             <>
            <Header text="Terug"
                    textLink ="/Support"/>
            <div className="container tips-page">
              <Title classes="header-title" text="Tips over..."/> 
              <div className="row information-block">
                  <div className="col">
                  <h2>Uitgaven</h2>
                    <p>Kloppen de prijzen niet meer of wil je het veranderen? Neem contact op met Lijn5!</p>
                    <Link className="to-do add-activity btn-pink btn add-category" aria-label="Nog uitgeven" to="/Help">Contact Lijn5</Link> 
                  </div>
              </div>

            </div>
            </>
        )
    }
}

export default Tips