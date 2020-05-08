import React, { Component } from 'react';
import {Header, MoneyBlock, ChosenCategory} from '../components/';
import {categoriesJson} from '../assets/';
import {myAccount} from '../assets/';

class ConfirmExpenses extends Component {
    render() {

        return (
             <>
            <Header text="Terug"
                    textLink ="/NogUitgeven"
                    addClass=""/>
            <div className="container confirm-expenses-page">
                <div className="row">
                    <div className="col col-md-10 col-lg-6 confirm-header">
                    <p>Dit hou ik over</p>
                    <p className="money">€</p>
                    </div>
                </div>
                <div className="row confirm-section-block">
                    <form action="">
                        <fieldset>
                            <legend>Hoeveel heb ik uiteindelijk betaald voor al mijn boodschappen bij elkaar?</legend>
                            <span>€</span><input type="number"/>
                        </fieldset>

                        <button className="btn btn-pink">Bevestigen</button>
                    </form>
                </div>

        
            </div>

            </>
        )
    }
}

export default ConfirmExpenses