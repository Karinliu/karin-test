import React, { Component } from 'react';
import {Title, Header, TemplateCategory, HeaderMoney} from '../components/';
import {categoriesJson} from '../assets/';

class Add extends Component {
    render() {
        const categories = categoriesJson.data_category.map(data =>
                <TemplateCategory image_purple={data.class} text={data.title}/>
            )
        return (
        	 <>
            <Header text="Terug"
                    textLink ="/Overview"
                    addClass="header2"/>
            <HeaderMoney toSpend="60,00" />
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