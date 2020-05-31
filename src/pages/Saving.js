import React, { Component } from 'react';
import {Title, Header, MoneyListItems, Modal3, Modal9, HeaderMoney} from '../components/';
import {itemsJson, myAccount} from '../assets/';

class Saving extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addClass: '',
            moneyAnimation: "coin d-none",
            disable: "modal d-none",
            disable2: "modal d-none",
            lastClickedValue: 0,
            value: 0,
            showNext:'',
            closeModal: '',
            removeMoney: '',
            removeNext: '',
            cryAnimation: "cry-animation d-none",
            pigAnimation: "piggy no-shake"
        };
        this.handler = this.handler.bind(this);
        this.handler2 = this.handler2.bind(this);
      }

    handleModal = (val) => {

        const currentVal = val
        this.setState({
                disable: currentVal,
                showNext: !this.state.showNext,
                addClass: !this.state.addClass
        })
    }

    handleModal2 = (val) => {

        const currentVal = val
        this.setState({
                disable2: currentVal,
                removeNext: !this.state.removeNext,
                removeMoney: !this.state.removeMoney
        })
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

    toggleDetails(){
        this.setState({addClass: !this.state.addClass})
    }

    clickedRemoveMoney(){
        setTimeout(() => {
          this.setState({
            removeMoney: !this.state.removeMoney,
            cryAnimation: "cry-animation d-none",
            pigAnimation: "piggy no-shake"
          })
        }, 1000);

        this.setState({
                cryAnimation: "cry-animation d-block",
                pigAnimation: "piggy with-shake"
        });
    }

    clickedRemoveMoneyBackFirst(){
        this.setState({
               removeMoney: !this.state.removeMoney
        });
    }

    clickedRemoveMoneyBack(){
        this.setState({
               removeMoney: !this.state.removeMoney,
               removeNext: !this.state.removeNext
        });
    }

    clickedRemoveNext() {
        this.setState({removeNext: !this.state.removeNext})
    }

    clickedNext() {
        this.setState({showNext: !this.state.showNext})
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

    handler() {
        this.setState({
              disable: "modal d-block"
          });
    }

    handler2() {
        this.setState({
              disable2: "modal d-block"
          });
    }

    render() {
        let price = this.state.value

        price = parseFloat(price).toFixed(2);


        let moneyToSpend = myAccount.my_account.map(data => {
            let price = this.state.value

            price = parseFloat(price).toFixed(2);

            if (typeof price === "undefined"){
                console.log(data.price, "oops")
                return data.total_money/4-15-60-14-5
            }else{

                const lastClickedValue = this.state.lastClickedValue
                
                console.log(data.price, "oops")

                const totalPrice = data.total_money/4-15-60-14-5
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

        const items =  itemsJson.data_price.map(data => {  

                    return <MoneyListItems 
                            price={data.price}
                            image_link={data.image_link}
                            id_item = {data.id_item}
                            dataAddValue = {this.addTotalPrice}
                            addAnimation = {this.addAnimation}
                            moneyToSpend = {moneyToSpend}
                            />})

        let boxClassHide = ['d-none'];
        let boxClassSee = ['d-block'];

        if(this.state.addClass) {
            boxClassSee.push('d-none');
            boxClassHide.push('d-block');
        }else{
            boxClassSee.push('d-block');
            boxClassHide.push('d-none');
        }

        let boxClassHide2 = ['d-none'];
        let boxClassSee2 = ['d-block'];

        if(this.state.showNext) {
            boxClassSee2.push('d-none');
            boxClassHide2.push('d-block');
        }else{
            boxClassSee2.push('d-block');
            boxClassHide2.push('d-none');
        }

        let boxClassHide3 = ['d-none'];
        let boxClassSee3 = ['d-block'];

        if(this.state.removeMoney) {
            boxClassSee3.push('d-none');
            boxClassHide3.push('d-block');
        }else{
            boxClassSee3.push('d-block');
            boxClassHide3.push('d-none');
        }

        let boxClassHide4 = ['d-none'];
        let boxClassSee4 = ['d-block'];

        if(this.state.removeNext) {
            boxClassSee4.push('d-none');
            boxClassHide4.push('d-block');
        }else{
            boxClassSee4.push('d-block');
            boxClassHide4.push('d-none');
        }

        return (
             <>
            <Header text="Terug"
                    textLink ="/Sparen"
                    addClass="header2"/>
            <HeaderMoney 
                    textFirst="Dit kan ik"
                    textDate="in mijn spaarpot"
                    textEnd="stoppen"
                    toSpend={moneyToSpend} />
            <div className="container saving-page">
                <Title classes="header-title"/> 

                <div className="row jar-money-add">
                <div className="col jar-money-title">
                        <p>In spaarpot stoppen</p>
                    </div>
                    {items}
                </div>
                <div className="row jar-money">
                    <div className="money-jar-block">
                            <div className="progress-bar">
                                <p className="target-text">Mijn doel</p>
                                <div class="bar">
                                    <div className="percentage">
                                    </div>
                                </div>
                            </div>
                            <div className={this.state.pigAnimation}>
                            <div className={this.state.moneyAnimation}>
                                    <div className="dollar dollar-one">€</div>
                                    <div className="dollar dollar-two">€</div>
                                    <div className="dollar dollar-three">€</div>
                                    <div className="dollar dollar-four">€</div>
                                    <div className="dollar dollar-five">€</div>
                            </div>
                                <div class="piggy-body">
                                    <p>Totaal gespaard <br /> € {price}</p>
                                    <div className="leg-1"></div>
                                    <div className="leg-2"></div>
                                    <div className="nose"></div>
                                    <div className="ear"></div>
                                    <div className="tail"></div>
                                    <div className="eye"></div>
                                    <div className={this.state.cryAnimation}> </div>
                                </div>
                            

                            </div>
                            
                    </div>

                </div>
                <div className="row btn-block-row">
                        <div className="col btn-container-money">
                            <button 
                            className="btn btn-pink plus-icon"
                            onClick={this.toggleDetails.bind(this)}>Doelen toevoegen</button>

                            <button 
                            className="btn btn-pink min-icon"
                            onClick={this.clickedRemoveMoney.bind(this)}>Geld uithalen</button>
                        </div>
                    </div>

                <div className={boxClassHide.join('test row target-option-block ')}>
                    <div className={boxClassSee2.join('test target-option-col col ')}>
                        <p>Voor wat wil je voor sparen?</p>
                        <input type="text"/>
                        <button onClick={this.clickedNext.bind(this)} className='test btn btn-green '>Volgende</button>
                        <button onClick={this.toggleDetails.bind(this)} className='test btn btn-red '>Ik wil geen doel zetten</button>
                    </div>

                    <div className={boxClassHide2.join('test target-option-col col  ')}>
                        <p>Okay, tof! Wat kost het?</p>
                        <span>€</span>
                        <input className="price-input" type="text"/>
                        <button onClick={this.handler} className='test btn btn-green '>Doel zetten</button>
                        <button onClick={this.toggleDetails.bind(this)}  className='test btn btn-red '>Stoppen</button>
                        <button onClick={this.clickedNext.bind(this)}  className='test btn btn-orange '>1 stap terug</button>  
                    </div>
                </div>

                <div className={boxClassHide3.join('test row target-option-block ')}>
                    <div className={boxClassSee4.join('test target-option-col col  ')}>
                        <p>Ohh... Weet je zeker dat je geld wilt uithalen?</p>
                        <button onClick={this.clickedRemoveNext.bind(this)} className='test btn btn-green '>Ja, ik weet het zeker!</button>
                        <button onClick={this.clickedRemoveMoneyBackFirst.bind(this)} className='test btn btn-red '>Ik wil geen geld uithalen</button>
                    </div>

                    <div className={boxClassHide4.join('test target-option-col col  ')}>
                        <p>Hoeveel wil je er uit halen?</p>
                        <span>€</span>
                        <input className="price-input" type="text"/>
                        <button onClick={this.handler2} className='test btn btn-green '>Geld uithalen</button>
                        <button onClick={this.clickedRemoveMoneyBack.bind(this)}  className='test btn btn-red '>Stoppen</button>
                        <button onClick={this.clickedRemoveNext.bind(this)}  className='test btn btn-orange '>1 stap terug</button>  
                    </div>

                </div>


                    
          

                <Modal3 
                addClass={this.state.disable}
                action={this.handler}
                handleModal={this.handleModal}/>

                <Modal9 
                addClass={this.state.disable2}
                action={this.handler2}
                handleModal={this.handleModal2}/>
            </div>

            </>
        )
    }
}

export default Saving