import React, { Component } from 'react';
import {Title, Header, PinkItemsList2,TitleCategory, HeaderMoney, Modal6} from '../components/';
import {itemsJson, myAccount, smiley} from '../assets/';
import { Link } from 'react-router-dom';

class FreeTimeAdd extends Component {
    constructor(props) {
    super(props);
        this.state = {
            addClass: '',
            items: [],
            disable: "modal d-none",
            chooseCategory: ''
        }
        this.handler = this.handler.bind(this);
    }

    handler() {
        this.setState({
              disable: "modal d-block"
          });
    }

    submitHandler(e) {
        e.preventDefault();

        console.log("clicked")
    }

    handleClick = (e) => {
        if (e.target.checked === true) {
            const listItem = e.target.value;
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

    clickedNo() {
        this.setState({chooseCategory: 'no'});
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

            return itemsnew
        })

        let element;
        if (this.state.chooseCategory === 'no') {
         element =(
            <>
                <p>Ik zou nog even wachten tot je genoeg hebt gespaard!</p>
                <img className="no-img" src={smiley} alt={smiley}/>
                <Link className="no-btn btn btn-pink" to="/Overview">Terug naar overzicht</Link>
            </>

         )
       }


        const newItemsList = newItems.map( data =>
            <PinkItemsList2 
                id_item={data[0].id_item}
                title={data[0].title}
                image_link={data[0].image_link}

            />)

    

        const moneyToSpend = myAccount.my_account.map(data =>
            data.total_money/4-15-60-14-5)

        return (
             <>
            <Header text="Terug"
                    textLink ="/Kleding"
                    addClass="header2"/>
            <HeaderMoney 
                textFirst="Deze" 
                textDate="week"
                textEnd="te besteden"
                toSpend={moneyToSpend} />
            <div className={boxClassSee.join('container pink-list clothes-page ')}>
                <Title classes="header-title"/> 
                
                <TitleCategory title="Deze kledingstukken wil ik gaan halen"/>

                <form onSubmit={this.submitHandler} method="post" action="/">
                <div className="row item-list">
                    {items}
                </div>

                <div class="row">
                    <div class="btn-col col col-md-10 col-lg-6">
                        <button onClick={this.toggleDetails.bind(this)} className="btn-pink btn">Toevoegen</button>
                        </div>
                    </div>
                </form>
            </div>

            <div className={boxClassHide.join('container section-page-two ')}>
                <div className="row">
                    {newItemsList}
                </div>
                <div className="row option-block">
                    <div className="col">
                        {element}
                        <p>Kost het bij elkaar <span>minder</span> dan {moneyToSpend} euro?</p>


                        <button className="btn btn-green" onClick={this.handler}>Ja</button>
                        <button className="btn btn-red" onClick={this.clickedNo.bind(this)}>Nee</button>
                        <button className="btn-orange btn" onClick={this.toggleDetails.bind(this)}> Ik wil nog wat wijzigen</button>
                    </div>
                </div>

                < Modal6 
                    addClass={this.state.disable}
                    action={this.handler}/>
            </div>
            </>
        )
    }
}

export default FreeTimeAdd