import React, { Component } from 'react';
import {Title, Header, Footer, PinkItemsList3, TitleCategory,  HeaderMoney} from '../components/';
import {itemsJson} from '../assets/';
import {myAccount} from '../assets/';

class GroceriesAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: '0',
            value: 0,
            lastClickedValue: 0
        }
        this.state = {value: 0};
        this.buttonClicked = this.buttonClicked.bind(this);
    }

    addTotalPrice = (val) => {

        this.setState((state) => {
            // Important: read `state` instead of `this.state` when updating.
            return {
                value: state.value + Number(val),
                lastClickedValue: Number(val)
            }
          });

        // console.log(val, "add total price")
    }

    removeTotalPrice = (val) => {

        this.setState((state) => {
            return {value: state.value - Number(val)}
          });

        // console.log(val, "remove total price")
    }

    buttonClicked(event) {
        this.setState({value: this.state.value+1});
    } 

    render() {
            let moneyToSpend = myAccount.my_account.map(data => {
            let price = this.state.value

            price = parseFloat(price).toFixed(2);

            // console.log(price, "what is the price")
            // console.log(data.total_money)

            if (typeof price === "undefined"){
                // console.log('oops')
                return data.total_money*0.8/4*0.8
            }else{

                const lastClickedValue = this.state.lastClickedValue
            
                const totalPrice = data.total_money*0.8/4*0.8
                if(price <= totalPrice){
                    let total = totalPrice - price

                    total = parseFloat(total).toFixed(2);

                    // console.log(total, "total total total addclickedbla")
                    return total
                }
                else{
                    let total = totalPrice - price + lastClickedValue

                    total = parseFloat(total).toFixed(2);

                    // console.log(total, "total total total remove")

                    alert('WOW STOP, LAATSTE ITEM KAN NIET GEHAALD WORDEN')
                    return total
                }
            } 

        })

        const titleCategory = itemsJson.groceries_categories.map(data =>
                <TitleCategory 
                    title={data.title}/>)

        const items_1 =  itemsJson.data_vegetables.map(data => 
            <PinkItemsList3 
                    title={data.title}
                    price={data.price}
                    image_link={data.image_link}
                    moneyToSpend = {moneyToSpend}
                    dataAddValue = {this.addTotalPrice}
                    dataRemoveValue = {this.removeTotalPrice}/>)

        const items_2 =  itemsJson.data_oil.map(data => 
            <PinkItemsList3 
                    title={data.title}
                    price={data.price}
                    image_link={data.image_link}
                    moneyToSpend = {moneyToSpend}
                    dataAddValue = {this.addTotalPrice}
                    dataRemoveValue = {this.removeTotalPrice}/>)


        const items_3 =  itemsJson.data_meat_fish.map(data => 
            <PinkItemsList3 
                    title={data.title}
                    price={data.price}
                    image_link={data.image_link}
                    moneyToSpend = {moneyToSpend}
                    dataAddValue = {this.addTotalPrice}
                    dataRemoveValue = {this.removeTotalPrice}/>)

        const items_4 =  itemsJson.data_grain.map(data => 
            <PinkItemsList3 
                    title={data.title}
                    price={data.price}
                    image_link={data.image_link}
                    moneyToSpend = {moneyToSpend}
                    dataAddValue = {this.addTotalPrice}
                    dataRemoveValue = {this.removeTotalPrice}/>)

        const items_5 =  itemsJson.data_drinks.map(data => 
            <PinkItemsList3 
                    title={data.title}
                    price={data.price}
                    image_link={data.image_link}
                    moneyToSpend = {moneyToSpend}
                    dataAddValue = {this.addTotalPrice}
                    dataRemoveValue = {this.removeTotalPrice}/>) 

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

            <Footer />

            </>
        )
    }
}

export default GroceriesAdd