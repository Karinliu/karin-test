import React, { Component } from 'react';
import {Title, Header} from '../components/';

class ViewPiggyBank extends Component {
    render() {

        const gespaard = "00.00"

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

            </>
        )
    }
}

export default ViewPiggyBank