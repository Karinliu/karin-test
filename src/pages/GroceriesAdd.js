import React, { Component } from 'react';
import {Title, Footer, Header,PinkItemsList,TitleCategory,  HeaderMoney} from '../components/';
import {itemsJson} from '../assets/';
import {myAccount} from '../assets/';

class GroceriesAdd extends Component {
    render() {

        const titleCategory = itemsJson.groceries_categories.map(data =>
                <TitleCategory 
                    title={data.title}/>)

        const items_1 =  itemsJson.data_vegetables.map(data => 
            <PinkItemsList 
                    title={data.title}
                    price={data.price}
                    image_link={data.image_link}/>)

        const items_2 =  itemsJson.data_oil.map(data => 
            <PinkItemsList 
                    title={data.title}
                    price={data.price}
                    image_link={data.image_link}/>)


        const items_3 =  itemsJson.data_meat_fish.map(data => 
            <PinkItemsList 
                    title={data.title}
                    price={data.price}
                    image_link={data.image_link}/>)

        const items_4 =  itemsJson.data_grain.map(data => 
            <PinkItemsList 
                    title={data.title}
                    price={data.price}
                    image_link={data.image_link}/>)

        const items_5 =  itemsJson.data_drinks.map(data => 
            <PinkItemsList 
                    title={data.title}
                    price={data.price}
                    image_link={data.image_link}/>)

        const moneyToSpend = myAccount.my_account.map(data =>
            data.total_money*0.8/4*0.8)


        return (
        	 <>
            <Header text="Terug"
                    textLink ="/Boodschappen"
                    addClass="header2"/>
            <HeaderMoney toSpend={moneyToSpend} />
            <div className="container pink-list">
                <Title classes="header-title"/> 
                
                {titleCategory[0]}
                <div className="row item-list">
                    {items_1}
                </div>
            </div>

            <div className="container pink-list">
                {titleCategory[1]}
                <div className="row item-list">
                    {items_2}
                </div>
            </div>

            <div className="container pink-list">                
                {titleCategory[2]}
                <div className="row item-list">
                    {items_3}
                </div>
            </div>

            <div className="container pink-list">
                {titleCategory[3]}
                <div className="row item-list">
                    {items_4}
                </div>
            </div>

            <div className="container pink-list">
                {titleCategory[4]}
                <div className="row item-list">
                    {items_5}
                </div>
            </div>

            <div className="container btn-container">
            <div className="row">
                <div className="col col-md-10 col-lg-6">
                    <button className="btn btn-pink plus-icon">Toevoegen</button>
                </div>
            </div></div>

            <Footer/>  

            </>
        )
    }
}

export default GroceriesAdd