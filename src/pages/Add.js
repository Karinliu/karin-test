import React, { Component } from 'react';
import {Title, Header, Footer, TemplateCategory, HeaderMoney} from '../components/';
import {categoriesJson} from '../assets/';
import {myAccount} from '../assets/';

class Add extends Component {
    render() {

        let categories = categoriesJson.data_category
              .filter(function (data) {
                console.log(data.title)
                return data.title !== "Help" & data.title !== "Vaste lasten";
              })
              .map(function (data) {
                return <TemplateCategory text_link={data.text_link} image_purple={data.class} text={data.title}/>
              })

        const moneyToSpend = myAccount.my_account.map(data =>
        data.total_money/4-15)

        return (
        	 <>
            <Header text="Terug"
                    textLink ="/Overview"
                    addClass="header2"/>
            <HeaderMoney 
                textFirst="Deze"
                textDate="week"
                textEnd="te besteden"
                toSpend={moneyToSpend} />
            <div className="container background-gray add-category-page">
                <Title classes="header-title" text="Toevoegen"/> 
                <nav className="row category">
                    <ul className="col">
                        {categories}
                    </ul>
                </nav>
            </div>

            <Footer/>
            </>
        )
    }
}

export default Add