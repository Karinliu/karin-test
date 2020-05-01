import React, { Component } from 'react';
import {Title, Footer, Header,PinkItemsList,TitleCategory,  HeaderMoney} from '../components/';
import {itemsJson} from '../assets/';

class FreeTimeAdd extends Component {
    render() {
        const items =  itemsJson.data_clothes.map(data => 
            <PinkItemsList 
                    title={data.title}
                    addClass="d-none"
                    image_link={data.image_link}/>)

        return (
             <>
            <Header text="Terug"
                    textLink ="/Overview"
                    addClass="header2"/>
            <HeaderMoney toSpend="60,00" />
            <div className="container pink-list clothes-page">
                <Title classes="header-title"/> 
                
                <TitleCategory title="Deze kledingstuk wil ik gaan halen"/>
                <div className="row item-list">
                    {items}
                </div>
            </div>

            <Footer/>  

            </>
        )
    }
}

export default FreeTimeAdd