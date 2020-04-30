import React, { Component } from 'react';
import {Title, Header, TemplateCategory, HeaderMoney} from '../components/';
import {categoriesJson} from '../assets/';
import {myAccount} from '../assets/';

class Add extends Component {
    render() {

        const categories = categoriesJson.data_category.map(data =>
                <TemplateCategory text_link={data.text_link} image_purple={data.class} text={data.title}/>
            )
        const moneyToSpend = myAccount.my_account.map(data =>
        data.total_money*0.8/4)

        return (
        	 <>
            <Header text="Terug"
                    textLink ="/Overview"
                    addClass="header2"/>
            <HeaderMoney toSpend={moneyToSpend} />
            <div className="container background-gray">
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

export default Add