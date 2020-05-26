import React, { Component } from 'react'
import {Title, Header} from '../components/';
import { Link } from 'react-router-dom';
import {MoneyBlockScreenshot} from '../assets/';


class Mail extends Component {
    render() {
        return (
             <>
            <Header text="Terug"
                    textLink ="/Overview"/>
            <div className="container tips-page">
              <Title classes="header-title" text="Tips E-mails"/> 
              <div className="row information-block">
                  <div className="col">
                  <h2>7 vragen</h2>
                    <p>Is op 1 van deze vragen het antwoord <span>nee?</span> Dan is de email waarschijnlijk <span>nep</span></p>

                    <i>Vraag 1</i> <br/>
                    <p>Heeft de email een persoonlijke aanhef?</p>

                    <i>Vraag 2</i> <br/>
                    <p>Is de email foutloos geschreven? Twijfel? Neem contact op met Lijn5! :)</p>

                    <i>Vraag 3</i> <br/>
                    <p>Is de email verstuurd vanuit het bedrijf zelf? (Bijv. <span>@naambedrijf.nl </span> of <span>@naambedrijf.com</span></p>

                    <i>Vraag 4</i> <br/>
                    <p>Is de email vriendelijk geschreven en heb je genoeg bedenktijd om te reageren?</p>

                    <i>Vraag 5</i> <br/>
                    <p>Verwijst de mail naar een betrouwbare link?</p>

                    <i>Vraag 6</i> <br/>
                    <p>Ben je klant van het bedrijf die de mail heeft geschreven?</p>

                    <i>Vraag 7</i> <br/>
                    <p>Wat zegt je gevoel? Twijfel niet doen en neem dan contact op met Lijn5! :)</p>

                  </div>
              </div>

              <div className="row information-block">
                  <div className="col">
                  <h2>Contact</h2>
                    <p>Kom je er niet uit? Neem contact op met Lijn5!</p>
                    <Link className="to-do add-activity btn-pink btn add-category" aria-label="Nog uitgeven" to="/Help">Contact Lijn5</Link> 
                  </div>
              </div>

            </div>
            </>
        )
    }
}

export default Mail