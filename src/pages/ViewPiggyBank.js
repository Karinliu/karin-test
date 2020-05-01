import React, { Component } from 'react';
import {Title, Footer, Header} from '../components/';

class ViewPiggyBank extends Component {
    render() {

        const gespaard = "99000,00"

        return (
             <>
            <Header text="Terug"
                    textLink ="/SparenToevoegen"/>
            <div className="container piggybank-view-page">
                <Title classes="header-title"/> 
                
                <div className="row jar-money">
                    <div className="col">
                    <p>Je hebt al <span>€ {gespaard}</span> gespaard!</p>
                    </div>
                </div>
            </div>

            <Footer/>  

            </>
        )
    }
}

export default ViewPiggyBank