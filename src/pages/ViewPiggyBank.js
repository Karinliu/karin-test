import React, { Component } from 'react';
import {Title, Header, TitleCategory,  HeaderMoney} from '../components/';

class ViewPiggyBank extends Component {
    render() {
        return (
             <>
            <Header text="Terug"
                    textLink ="/Kleding"
                    addClass="header2"/>
            <HeaderMoney toSpend="60,00" />
            <div className="container piggybank-view-page">
                <Title classes="header-title"/> 
                
                <div className="row">
                    <div className="col jar-money">
                    </div>
                </div>
            </div>

            </>
        )
    }
}

export default ViewPiggyBank