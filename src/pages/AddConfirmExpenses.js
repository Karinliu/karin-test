import React, { Component } from 'react';
import { Header, Modal2} from '../components/';

class AddConfirmExpenses extends Component {
    constructor(props) {
    super(props);
        this.state = {
            disable: "modal d-none",
            disableSec: "modal d-none",
            errorText: '',
            addClass: '',
            chooseCategory: ''
        }
        this.handler = this.handler.bind(this);
        this.handlerSec = this.handlerSec.bind(this);
    }

    submitHandler(e) {
        e.preventDefault();
        console.log("click click")

        console.log(e.target.value, "wat wat wat")
    }

    clickedYes(){
        this.setState({chooseCategory: !this.state.chooseCategory})
    }

    toggleDetails(){
        this.setState({addClass: !this.state.addClass})
    }

    handler() {
        this.setState({
              disable: "modal d-block"
          });
      }

    handlerSec() {
        this.setState({
              disableSec: "modal d-block"
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

        let boxFirstClassHide = ['d-none'];
        let boxFirstClassSee = ['d-block'];

        if(this.state.chooseCategory) {
            boxFirstClassSee.push('d-none');
            boxFirstClassHide.push('d-block');
        }else{
            boxFirstClassSee.push('d-block');
            boxFirstClassHide.push('d-none');
        }

        let today = new Date();
        let date = today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+ today.getFullYear();
        console.log(date);

        return ( 
            <>
            <Header text="Terug"
                    textLink ="/Overview"
                    addClass=""/> 

            <div  className="container confirm-expenses-page" >
                <div className="row">
                        <div className="col col-md-10 col-lg-6 confirm-header">
                        <p>Hoeveel kost het?</p>
                        <p className="money">€</p>
                        </div>
                    </div> 
                <div className = "row confirm-section-block" >
                    <form onSubmit={this.submitHandler} method="post" action="/overview">
                            <fieldset>
                            <legend className={boxClassSee.join('test ')}>Welke categorie en uitgave hoort hierbij?</legend>
                                <select className="custom-select" id="options-categories">
                                    <option value="kies_categorie">Kies categorie</option>
                                    <option value="1">Boodschappen</option>
                                    <option value="2">Kleding</option>
                                    <option value="3">Vrije tijd</option>
                                    <option value="4">Sparen</option>
                                    <option value="5">Verzorging</option>
                                    <option value="6">Vaste lasten</option>
                                    <option value="7">Overige</option>
                                </select>

                            </fieldset>
                            <fieldset>
                                <legend className={boxClassHide.join('test ')}>Klopt de datum en het uitgegeven bedrag?</legend>
                                <select className="custom-select" id="options">
                                    <option value="0">Kies datum en het uitgegeven bedrag</option>
                                    <option value="1">{date} Uitgave: € 1.50</option>
                                </select>
                            </fieldset>
                            <fieldset className="image-send">
                                <label >Voeg een foto toe als bevestiging</label>
                                <input type="file" accept="image/*" required/>
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
            <
            />
        )
    }
}

export default AddConfirmExpenses