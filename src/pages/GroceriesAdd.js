import React, { Component } from 'react';
import {Title, Header, Footer, PinkItemsList3, TitleCategory,  HeaderMoney} from '../components/';
import {itemsJson} from '../assets/';
import {myAccount} from '../assets/';

class GroceriesAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
              price: "0,00",
        };
        this.state = {value: 0};
        this.buttonClicked = this.buttonClicked.bind(this);
        this.getData = this.getData.bind(this);
    }
      
    buttonClicked(event) {
        this.setState({value: this.state.value+1});
    }

    getData(val){
        // do not forget to bind getData in constructor

        const total = val;

        this.setState({
          price: total
        })
    }

    render() {

        const titleCategory = itemsJson.groceries_categories.map(data =>
                <TitleCategory 
                    title={data.title}/>)

        const items_1 =  itemsJson.data_vegetables.map(data => 
            <PinkItemsList3 
                    ref={(pinkItemsComponent) => {window.pinkItemsComponent = pinkItemsComponent}}
                    title={data.title}
                    price={data.price}
                    image_link={data.image_link}
                    sendData={this.getData}/>)

        const items_2 =  itemsJson.data_oil.map(data => 
            <PinkItemsList3 
                    title={data.title}
                    price={data.price}
                    image_link={data.image_link}
                    sendData={this.getData}/>)


        const items_3 =  itemsJson.data_meat_fish.map(data => 
            <PinkItemsList3 
                    title={data.title}
                    price={data.price}
                    image_link={data.image_link}
                    sendData={this.getData}/>)

        const items_4 =  itemsJson.data_grain.map(data => 
            <PinkItemsList3 
                    title={data.title}
                    price={data.price}
                    image_link={data.image_link}
                    sendData={this.getData}/>)

        const items_5 =  itemsJson.data_drinks.map(data => 
            <PinkItemsList3 
                    title={data.title}
                    price={data.price}
                    image_link={data.image_link}
                    sendData={this.getData}/>)        

        let moneyToSpend = myAccount.my_account.map(data => {
            const price = this.state.price
            console.log(price, "what is the price")
            console.log(data.total_money)

            if (typeof price === "undefined"){
                console.log('oops')
                return data.total_money*0.8/4*0.8
            }else{
            
                const totalPrice = data.total_money*0.8/4*0.8
                if(price <= totalPrice){
                    const total = data.total_money*0.8/4*0.8 - price
                    return total
                }
                else{
                    alert('WOW STOP, LAATSTE ITEM KAN NIET GEHAALD WORDEN')
                    return 
                }
            } 

        })



        moneyToSpend = parseFloat(moneyToSpend).toFixed(2);

        


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