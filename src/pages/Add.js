import React, { Component } from 'react';
import {Title, Header, TemplateCategory, HeaderMoney} from '../components/';
import {categoriesJson} from '../assets/';
import {myAccount} from '../assets/';

class Add extends Component {
    render() {

        let categories = categoriesJson.data_category
              .filter(function (data) {
                console.log(data.title)
                return data.title !== "Help" & data.title !== "Vaste lasten" & data.title !== "Sparen" ;
              })
              .map(function (data) {
                return <TemplateCategory text_link={data.text_link} image_purple={data.class} text={data.title}/>
              })

        const moneyToSpend = myAccount.my_account.map(data =>
        data.total_money/4-35)

        return (
        	 <>
            <Header text="Terug"
                    textLink ="/Overview"
                    addClass="header2"/>
            <HeaderMoney 
                textFirst="Wat heb ik uit te geven voor deze"
                textDate="week"
                toSpend={moneyToSpend} />
            <div className="container background-gray add-category-page">
                <Title classes="header-title" text="Kies uitgave"/> 
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