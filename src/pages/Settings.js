import React, { Component } from 'react'
import {Title, Header, TitleCategory} from '../components/';
import {myAccount} from '../assets/';
import { Link } from 'react-router-dom';


class Settings extends Component {
    render() {

        const tableSettings = myAccount.settings_price.map(data =>
                <tr>
                    <td>{data.title}</td>
                    <td>€ {data.price}</td>
                    <td>{data.when}</td>
                </tr>)

        
        return (
        	 <>
            <Header text="Terug"
                    textLink ="/Overview"/>
            <div className="container pink-list settings-page">
              <Title classes="header-title" text="Instellingen"/> 
              <TitleCategory title="Prijzen"/>

              <table>
                  <tr>
                    <th>Categorie</th>
                    <th>Prijs</th>
                    <th>Wanneer</th>
                  </tr>
                  {tableSettings}
            </table>

                <div className="row title-text">
                    <div className="col">
                        <p>Instellingen van de prijzen veranderen? Neem contact op met Lijn5. :)</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <Link className="to-do add-activity btn-pink btn add-category" aria-label="Nog uitgeven" to="/Help">Contact Lijn5</Link>  
                    </div>
                </div>
            </div>


            </>
        )
    }
}

export default Settings