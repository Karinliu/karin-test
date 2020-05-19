import React, { Component } from 'react';
import {Title, Footer, Header, MoneyListItems, HeaderMoney, Modal3} from '../components/';
import {itemsJson} from '../assets/';

class ViewPiggyBank extends Component {
    constructor(props) {
        super(props);
        this.state = {
              moneyAnimation: "coin d-none",
              disable: "modal d-none"
        };
        this.handler = this.handler.bind(this);
      }

    addAnimation = (val) => {
        setTimeout(() => {
          this.setState({ moneyAnimation: "coin d-none" });
        }, 3000);

        this.setState((state) => {
            return {
                moneyAnimation: val
            }
          });
    }

    handler() {
        this.setState({
              disable: "modal d-block"
          });
    }

    render() {

        const items =  itemsJson.data_price.map(data => 
            <MoneyListItems 
                    price={data.price}
                    image_link={data.image_link}
                    id_item = {data.id_item}
                    addAnimation = {this.addAnimation}
                    />)

        return (
             <>
            <Header text="Terug"
                    textLink ="/SparenToevoegen"/>
            <div className="container piggybank-add-page pink-background">
                <Title classes="header-title"/> 
                
                <div className="row jar-money">
                    <div className="col">
                        <div className="jar-lid"></div>
                        <div className="jar-bowl">
                        <div className={this.state.moneyAnimation}>
                                <div className="dollar dollar-one">€</div>
                                <div className="dollar dollar-two">€</div>
                                <div className="dollar dollar-three">€</div>
                                <div className="dollar dollar-four">€</div>
                                <div className="dollar dollar-five">€</div>
                        </div>
                        </div>
                        
                    </div>
                </div>
                <div className="row jar-money-title">
                    <div className="col">
                        <p>In spaarpot stoppen</p>
                    </div>
                </div>


                <div className="row jar-money-add">
                    {items}
                </div>

                <div className="row btn-container-money">
                    <div className="col">
                        <button 
                        className="btn btn-pink plus-icon"
                        onClick={this.handler}>Toevoegen</button>
                    </div>
                </div>
                < Modal3 
                addClass={this.state.disable}
                action={this.handler}/>
            </div>

            </>
        )
    }
}

export default ViewPiggyBank