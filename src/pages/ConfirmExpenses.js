import React, { Component } from 'react';
import { Header, MoneyBlock, ChosenCategory, Modal2 , Footer} from '../components/';
import { categoriesJson, myAccount } from '../assets/';
import { Link } from 'react-router-dom';

class ConfirmExpenses extends Component {
    constructor(props) {
    super(props);
        this.state = {
            disable: "modal d-none",
            errorText: '',
            addClass: '',
            disable: "modal d-none"
        }
        this.handler = this.handler.bind(this);
    }

    submitHandler(e) {
        e.preventDefault();
        console.log("click click")

        console.log(e.target.value, "wat wat wat")
    }

    toggleDetails(){
        this.setState({addClass: !this.state.addClass})
    }

    handler() {
        this.setState({
              disable: "modal d-block"
          });
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

        return ( 
            <>
            <Header text="Terug"
                    textLink ="/NogUitgeven"
                    addClass=""/> 
            <div className = "container confirm-expenses-page" >
                <div className="row">
                        <div className="col col-md-10 col-lg-6 confirm-header">
                        <p>Hoeveel kost het?</p>
                        <p className="money">€</p>
                        </div>
                    </div> 
                <div className = "row confirm-section-block" >
                    <form onSubmit={this.submitHandler} method="post" action="/overview">
                            <fieldset>
                                <legend className={boxClassSee.join('test ')}>Hoeveel heb ik uiteindelijk betaald voor al mijn boodschappen bij elkaar?</legend>
                                <legend className={boxClassHide.join('test ')}>Klopt het dat ik dit heb uitgegeven aan boodschappen?</legend>
                                <span>€</span>

                                <input 
                                type="number" 
                                required
                                />
                            </fieldset>

                            <button 
                            className={boxClassSee.join('test btn btn-pink ')}
                            onClick={this.toggleDetails.bind(this)}
                            >
                            Bevestigen</button>

                            <button
                            type="submit"
                            onClick={this.handler}
                            className={boxClassHide.join('test btn btn-green ')}
                              to="/Overview"
                            >
                            Ja
                            </button>

                        <button onClick={this.toggleDetails.bind(this)} className={boxClassHide.join('test btn btn-red ')}>Nee</button>
                        <button className={boxClassHide.join('test btn btn-orange ')} onClick={this.toggleDetails.bind(this)}> Ik wil nog wat wijzigen</button>
                    </form> 
                </div>
                < Modal2 
                addClass={this.state.disable}
                action={this.handler}/>
            </div>


            <Footer/>
            <
            />
        )
    }
}

export default ConfirmExpenses