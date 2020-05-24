import React, { Component } from 'react';
import {Title, Header, PinkItemsList, TitleCategory, Modal7, HeaderMoney} from '../components/';
import {itemsJson, myAccount} from '../assets/';
import { Link } from 'react-router-dom';

class GroceriesAdd extends Component {
    constructor(props) {
    super(props);
        this.state = {
            price: '0',
            value: 0,
            items: [],
            lastClickedValue: 0,
            chooseCategory: '',
            checked: '', 
            disable: "modal d-none",

        }
        this.handler = this.handler.bind(this);
        
        this.buttonClicked = this.buttonClicked.bind(this);
        // this.handleClick = this.handleClick.bind(this);
        this.state = {value: 0,
                    items: []};
    }

    handleClickAdd = (val) => {

        const currentVal = val

        this.setState({
                items: [...this.state.items, val]
        })



        
    }
 
    handleClickRemove = (val) =>{
        // console.log(val, 'wat is de handleclickremove')

        // console.log(this.state.items, "wat zijn de items")

        // const currentVal = val

        // this.setState({items: this.state.items.filter(function(data) { 
        //     console.log(data, 'wat is de data')


        //     return data !== currentVal
        // })[0]});
    
    }

    handler() {
        this.setState({
              disable: "modal d-block"
          });
    }

    addTotalPrice = (val) => {

        this.setState((state) => {
            // Important: read `state` instead of `this.state` when updating.
            return {
                value: state.value + Number(val),
                lastClickedValue: Number(val)
            }
          });
    }

    removeTotalPrice = (val) => {

        this.setState((state) => {
            return {value: state.value - Number(val),
                    lastClickedValue: Number(val)}
          });

    }

    buttonClicked(event) {
        this.setState({value: this.state.value+1});
    } 

     toggleDetails(){
        this.setState({addClass: !this.state.addClass})
    }

    clickedNo() {
        this.setState({chooseCategory: 'no'});
    }

    // handleClick = (e) => {
    //     if (e.target.checked === true) {
    //         const listItem = e.target.value;
    //         const items = [...this.state.items, listItem]
    //         // const items = [listItem + ', '+this.state.items]

    //         this.setState({
    //             items: items
    //         })
    //     }
    //     if (e.target.checked === false) {
    //         const listItem = e.target.value;

    //         const filteredItems = this.state.items.find(item => {
    //             return item === listItem
    //         })

    //         this.setState({
    //             items: this.state.items.filter(item => {
    //                 return item !== filteredItems
    //             })
    //         });
    //     }
    // }

    render() {
            let moneyToSpend = myAccount.my_account.map(data => {
            let price = this.state.value

            price = parseFloat(price).toFixed(2);

            if (typeof price === "undefined"){
                console.log(data.price, "oops")
                return data.total_money/4-35-70-5
            }else{

                const lastClickedValue = this.state.lastClickedValue
                
                console.log(data.price, "oops")

                const totalPrice = data.total_money/4-35-70-5
                if(price <= totalPrice){
                    let total = totalPrice - price

                    total = parseFloat(total).toFixed(2);

                    return total
                }
                else{
                    let total = totalPrice - price + lastClickedValue

                    total = parseFloat(total).toFixed(2);

                    alert('WOW STOP, LAATSTE ITEM KAN NIET GEHAALD WORDEN')
                    return total
                }
            } 

        })

        const titleCategory = itemsJson.groceries_categories.map(data =>
                <TitleCategory 
                    title={data.title}/>)

        const items_1 =  itemsJson.data_vegetables.map(data => 
            <PinkItemsList 
                    title={data.title}
                    price={data.price}
                    image_link={data.image_link}
                    handleClickAdd = {this.handleClickAdd}
                    handleClickRemove={this.handleClickRemove}
                    id_item = {data.id_item}
                    moneyToSpend = {moneyToSpend}
                    dataAddValue = {this.addTotalPrice}
                    dataRemoveValue = {this.removeTotalPrice}/>)

        const newItems_1 = this.state.items.map(data=>{
            const item = data;

            const itemsnew_1 =  itemsJson.data_vegetables.filter(data => {
                return data.title === item;
            })

            return itemsnew_1
        })

        const newItemsList_1 = newItems_1.map( data => {
                if(typeof data[0] !== "undefined"){
                return <div className="grocerie-item-list-item">
                <PinkItemsList
                            title={data[0].title}
                            image_link={data[0].image_link}
                        />
                    </div>
            }
        })



        const items_2 =  itemsJson.data_oil.map(data => 
            <PinkItemsList 
                    title={data.title}
                    price={data.price}
                    image_link={data.image_link}
                    handleClickAdd = {this.handleClickAdd}
                    handleClickRemove={this.handleClickRemove}
                    id_item = {data.id_item}
                    moneyToSpend = {moneyToSpend}
                    dataAddValue = {this.addTotalPrice}
                    dataRemoveValue = {this.removeTotalPrice}/>)

        const newItems_2 = this.state.items.map(data=>{
            const item = data;

            const itemsnew_2 =  itemsJson.data_oil.filter(data => {
                return data.title === item;
            })

            return itemsnew_2
        })

        const newItemsList_2 = newItems_2.map( data => {
                if(typeof data[0] !== "undefined"){
                return <div className="grocerie-item-list-item">
                <PinkItemsList
                            title={data[0].title}
                            image_link={data[0].image_link}
                        />
                    </div>
            }
        })

        const items_3 =  itemsJson.data_meat_fish.map(data => 
            <PinkItemsList 
                    title={data.title}
                    price={data.price}
                    image_link={data.image_link}
                    handleClickAdd = {this.handleClickAdd}
                    handleClickRemove={this.handleClickRemove}
                    id_item = {data.id_item}
                    moneyToSpend = {moneyToSpend}
                    dataAddValue = {this.addTotalPrice}
                    dataRemoveValue = {this.removeTotalPrice}/>)

        const newItems_3 = this.state.items.map(data=>{
            const item = data;

            const itemsnew_3 =  itemsJson.data_meat_fish.filter(data => {
                return data.title === item;
            })

            return itemsnew_3
        })

        const newItemsList_3 = newItems_3.map( data => {
                if(typeof data[0] !== "undefined"){
                return <div className="grocerie-item-list-item">
                <PinkItemsList
                            title={data[0].title}
                            image_link={data[0].image_link}
                        />
                    </div>
            }
        })

        const items_4 =  itemsJson.data_grain.map(data => 
            <PinkItemsList 
                    title={data.title}
                    price={data.price}
                    image_link={data.image_link}
                    handleClickAdd = {this.handleClickAdd}
                    handleClickRemove={this.handleClickRemove}
                    id_item = {data.id_item}
                    moneyToSpend = {moneyToSpend}
                    dataAddValue = {this.addTotalPrice}
                    dataRemoveValue = {this.removeTotalPrice}/>)

        const newItems_4 = this.state.items.map(data=>{
            const item = data;

            const itemsnew_4 =  itemsJson.data_grain.filter(data => {
                return data.title === item;
            })

            return itemsnew_4
        })

        const newItemsList_4 = newItems_4.map( data => {
                if(typeof data[0] !== "undefined"){
                return <div className="grocerie-item-list-item">
                <PinkItemsList
                            title={data[0].title}
                            image_link={data[0].image_link}
                        />
                    </div>
            }
        })

        const items_5 =  itemsJson.data_drinks.map(data => 
            <PinkItemsList 
                    title={data.title}
                    price={data.price}
                    image_link={data.image_link}
                    handleClickAdd = {this.handleClickAdd}
                    handleClickRemove={this.handleClickRemove}
                    id_item = {data.id_item}
                    moneyToSpend = {moneyToSpend}
                    dataAddValue = {this.addTotalPrice}
                    dataRemoveValue = {this.removeTotalPrice}/>) 

        const newItems_5 = this.state.items.map(data=>{
            const item = data;

            const itemsnew_5 =  itemsJson.data_drinks.filter(data => {
                return data.title === item;
            })

            return itemsnew_5
        })

        const newItemsList_5 = newItems_5.map( data => {
                if(typeof data[0] !== "undefined"){
                return <div className="grocerie-item-list-item">
                <PinkItemsList
                            title={data[0].title}
                            image_link={data[0].image_link}
                        />
                    </div>
            }
        })


        let boxClassHide = ['d-none'];
        let boxClassSee = ['d-block'];

        if(this.state.addClass) {
            boxClassSee.push('d-none');
            boxClassHide.push('d-block');
        }else{
            boxClassSee.push('d-block');
            boxClassHide.push('d-none');
        }


        return (
             <>
            <Header text="Terug"
                    textLink ="/Boodschappen"
                    addClass="header2"/>
            <HeaderMoney 
            textFirst="Dit"
            textDate="hou ik over"
            textEnd="voor boodschappen"
            toSpend={moneyToSpend} />
            <div className={boxClassSee.join('container pink-list ')}>
                <Title classes="header-title"/> 
                
                {titleCategory[0]}
                <div className="row item-list">
                    {items_1}
                </div>
            </div>

            <div className={boxClassSee.join('container pink-list ')}>
                {titleCategory[1]}
                <div className="row item-list">
                    {items_2}
                </div>
            </div>

            <div className={boxClassSee.join('container pink-list ')}>                
                {titleCategory[2]}
                <div className="row item-list">
                    {items_3}
                </div>
            </div>

            <div className={boxClassSee.join('container pink-list ')}>
                {titleCategory[3]}
                <div className="row item-list">
                    {items_4}
                </div>
            </div>

            <div className={boxClassSee.join('container pink-list ')}>
                {titleCategory[4]}
                <div className="row item-list">
                    {items_5}
                </div>
            </div>

            <div className={boxClassSee.join('container btn-container ')}>
            <div className="row">
                <div className="col col-md-10 col-lg-6">
                    <button onClick={this.toggleDetails.bind(this)} className="btn btn-pink plus-icon">Toevoegen</button>
                </div>
            </div></div>

            <div className={boxClassHide.join('container section-page-two section-page-two-grocery-one ')}>
            <div className="row option-block-see-items groceries-see-items">
                        {newItemsList_1}
                        {newItemsList_2}
                        {newItemsList_3}
                        {newItemsList_4}
                        {newItemsList_5}
                </div>
            </div>

            <div className={boxClassHide.join('container section-page-two section-page-two-grocery-two ')}>
                <div className="row option-block option-block-grocery">
                    <div className="col">
                        <p>Wil ik al deze items gaan halen?</p>

                        <button className="btn btn-green" onClick={this.handler}>Ja</button>
                        <Link className="btn btn-red" to="/Overview">Nee</Link>
                        <button className="btn-orange btn" onClick={this.toggleDetails.bind(this)}> Ik wil nog wat wijzigen</button>
                    </div>
                </div>

                < Modal7
                    modalClass={this.state.disable}
                    action={this.handlerModal}
                />
            </div>
            </>
        )
    }
}

export default GroceriesAdd