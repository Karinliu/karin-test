import React, { Component } from 'react';
import {Title, Header, TemplateCategory, HeaderMoney} from '../components/';
import {categoriesJson, myAccount} from '../assets/';

class SaveMoneyAdd extends Component {
    render() {
        const categories = categoriesJson.data_save_money_categories.map(data =>
                <TemplateCategory text_link={data.text_link} image_purple={data.class} text={data.title}/>
            )

        const moneyToSpend = myAccount.my_account.map(data =>
            data.total_money/4-15-60-14-5)

        return (
             <>
            <Header text="Terug"
                    textLink ="/Sparen"
                    addClass="header2"/>
            <HeaderMoney 
                textFirst="Deze" 
                textDate="week"
                textEnd="te besteden"
                toSpend={moneyToSpend} />
            <div className="container save-money-page background-gray">
                <Title classes="header-title" text="Toevoegen"/> 
                <nav className="row category">
                    <ul className="col">
                        {categories}
                    </ul>
                </nav>
            </div>

            </>
        )
    }
}

export default SaveMoneyAdd