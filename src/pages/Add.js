import React, { Component } from 'react';
import {Title, Header, TemplateCategory, HeaderMoney} from '../components/';
import json from '../assets/json/index.json';

class Add extends Component {
    render() {
        console.log(json.data_category.map(data => data.title))
        return (
        	 <>
            <Header text="Terug"
                    textLink ="/Overview"
                    addClass="header2"/>
            <HeaderMoney toSpend="60,00" />
            <div className="container background-gray">
                <div className="row">
                    <Title classes="header-title" text="Toevoegen"/> 
                </div>
                <nav className="row category">
                    <ul className="col">
                        {json.data_category.map(data =>
                            <TemplateCategory image_purple={data.class} text={data.title}/>
                        )}
                    </ul>
                </nav>
            </div>

            </>
        )
    }
}

export default Add