import React, { Component } from 'react';
import {Title, Header,PinkItemsList2,TitleCategory,  HeaderMoney} from '../components/';
import {itemsJson} from '../assets/';
import {myAccount} from '../assets/';
import { Link } from 'react-router-dom';

class ClothesAdd extends Component {
    constructor(props) {
    super(props);
        this.state = {
            addClass: '',
            items: [],
        }
    }

    submitHandler(e) {
        e.preventDefault();

        console.log("clicked")
    }

    handleClick = (e) => {
        if (e.target.checked === true) {
            const listItem = e.target.value;
            const itemInformation = e.target.data
            const items = [...this.state.items, listItem]
            // const items = [listItem + ', '+this.state.items]

            this.setState({
                items: items
            })
        }
        if (e.target.checked === false) {
            const listItem = e.target.value;

            const filteredItems = this.state.items.find(item => {
                return item === listItem
            })

            this.setState({
                items: this.state.items.filter(item => {
                    return item !== filteredItems
                })
            });
        }
    }

    toggleDetails(){
        this.setState({addClass: !this.state.addClass})
    }

    render() {
        let boxClassHide = ['d-none'];
        let boxClassSee = ['d-block'];

        if(this.state.addClass) {
            boxClassSee.push('d-none');
            boxClassHide.push('d-block');
        }else{
            boxClassSee.push('d-block');
            boxClassHide.push('d-none');
        }

        const items =  itemsJson.data_clothes.map(data => 
            <PinkItemsList2 
                    handleClick={this.handleClick}
                    title={data.title}
                    id_item={data.id_item}
                    addClass="d-none"
                    image_link={data.image_link}/>)

        
        const newItems = this.state.items.map(data=>{
            const item = data;

            const itemsnew =  itemsJson.data_clothes.filter(data => {
                return data.id_item === item;
            })
            // console.log(itemsnew,'show first')

            return itemsnew
        })


        const newItemsList = newItems.map( data =>
            <PinkItemsList2 
                id_item={data[0].id_item}
                title={data[0].title}
                image_link={data[0].image_link}

            />)

    

        const moneyToSpend = myAccount.my_account.map(data =>
            data.total_money*0.8/4*0.4)

        return (
             <>
            <Header text="Terug"
                    textLink ="/Kleding"
                    addClass="header2"/>
            <HeaderMoney toSpend={moneyToSpend} />
            <div className={boxClassSee.join('container pink-list clothes-page ')}>
                <Title classes="header-title"/> 
                
                <TitleCategory title="Deze kledingstuk wil ik gaan halen"/>

                <form onSubmit={this.submitHandler} method="post" action="/">
                <div className="row item-list">
                    {items}
                </div>

                <button onClick={this.toggleDetails.bind(this)} className="btn-pink btn">Toevoegen</button>
                </form>
            </div>

            <div className={boxClassHide.join('container clothes-page-two ')}>
                <div className="row">
                    {newItemsList}
                </div>
                <div className="row option-block">
                    <div className="col">
                        <p>Kost het bij elkaar minder dan {moneyToSpend} euro?</p>
                    </div>
                    <div className="col"><button className="btn-green btn">Ja</button></div>
                    <div className="col"><button className="btn-red btn">Nee</button></div>
                    <div className="col"><button className="btn-orange btn" onClick={this.toggleDetails.bind(this)}> Ik wil nog wat wijzigen</button></div>

                </div>
            </div>

            </>
        )
    }
}

export default ClothesAdd