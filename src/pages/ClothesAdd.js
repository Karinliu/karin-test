import React, { Component } from 'react';
import {Title, Header,PinkItemsList2,TitleCategory, Footer, HeaderMoney} from '../components/';
import {itemsJson, myAccount, smiley} from '../assets/';
import { Link } from 'react-router-dom';

class ClothesAdd extends Component {
    constructor(props) {
    super(props);
        this.state = {
            addClass: '',
            items: [],
            chooseCategory: ''
        }
    }

    submitHandler(e) {
        e.preventDefault();

        console.log("clicked")
    }

    handleClick = (e) => {
        console.log("ja")
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
            data.total_money*0.8/4*0.4)


        // let myItems = [];
        // let newItemsListData = newItems.map( data =>{

        //     data.forEach((data) =>{
        //         // console.log(data.id_item)
                
        //         myItems.push({
        //             id_item: data.id_item,
        //             title: data.title,
        //             image_link: data.image_link,
        //             });
        //         })
        //     })

        // console.log(myItems, 'zijn')

        return (
             <>
            <Header text="Terug"
                    textLink ="/Kleding"
                    addClass="header2"/>
            <HeaderMoney text="Deze week te besteden" toSpend={moneyToSpend} />
            <div className={boxClassSee.join('container pink-list clothes-page ')}>
                <Title classes="header-title"/> 
                
                <TitleCategory title="Deze kledingstuk wil ik gaan halen"/>

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
                        <p>Kost het bij elkaar minder dan {moneyToSpend} euro?</p>

                        <Link
                            className="btn btn-green"
                              to="/Overview"
                            >
                            Ja
                            </Link>

                        <button className="btn btn-red" onClick={this.clickedNo.bind(this)}>Nee</button>
                        <button className="btn-orange btn" onClick={this.toggleDetails.bind(this)}> Ik wil nog wat wijzigen</button>
                    </div>
                </div>
            </div>
            <Footer/>
            </>
        )
    }
}

export default ClothesAdd