import React, { Component } from 'react';
import {Title, Header, TemplateCategory, HeaderMoney} from '../components/';
import {categoriesJson} from '../assets/';

class SaveMoneyAdd extends Component {
    render() {
        const categories = categoriesJson.data_save_money_categories.map(data =>
                <TemplateCategory text_link={data.text_link} image_purple={data.class} text={data.title}/>
            )
        return (
             <>
            <Header text="Terug"
                    textLink ="/Sparen"
                    addClass="header2"/>
            <HeaderMoney toSpend="60,00" />
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