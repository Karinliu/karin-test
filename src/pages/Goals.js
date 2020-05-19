import React, { Component } from 'react';
import {Title, Footer, Header, MoneyListItems, HeaderMoney, Modal3} from '../components/';
import {itemsJson, Target} from '../assets/';
import { Link } from 'react-router-dom';


class Goals extends Component {
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

        return (
             <>
            <Header text="Terug"
                    textLink ="/SparenToevoegen"/>
            <div className="container goals-page pink-background">
                <Title classes="header-title"/> 
                
                <div className="row goals-header">
                    <div className="col">
                        <img src={Target} alt="target"/>
                    </div>
                </div>
            </div>
            <div class="container goals-option-block">
            <div class="row option-block-title">
                <div class="col">
                    <p>Doelen</p>
                </div>
            </div>
            <div className="row option-block-options">
                    <div className="col">
                        <Link to="/DoelenToevoegen">
                            <span className="add_target">
                            </span>
                            <p>Toevoegen</p>
                        </Link>
                    </div>

                    <div className="col">
                        <Link to="/BekijkenSpaarpot">
                            <span className="see_money"> 
                            </span>
                            <p>Bekijken</p>
                        </Link>
                    </div>
                </div>
            </div>

            </>
        )
    }
}

export default Goals