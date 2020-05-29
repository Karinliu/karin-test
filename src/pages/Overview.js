import React, { Component } from 'react';
import {Title, Header, MoneyBlock, ProgressBar, GrayBlockItem} from '../components/';
import { Link } from 'react-router-dom';
import {myAccount, piggybank, todo} from '../assets/';

class Overview extends Component {
    render() {
        const moneyToSpend = myAccount.my_account.map(data =>
                data.total_money)

        const moneyToSpendWeek = myAccount.my_account.map(data =>
                data.total_money/4-35)

        let data = this.props.location.myItems

        

        if (typeof data === 'undefined') {
          // color is undefined
          console.log('oops')
        }
        else{
            data.map(data =>{
                console.log(data.id_item)
            })
        }


        let categoriesIncome = myAccount.data_category
              .map(function (data) {
                return <ProgressBar 
                image_purple={data.class} 
                text={data.title}
                toSpend={data.price}
                percentage={data.percentage}
                toSpendMaxPrice={data.price_to_spend}/>
              })

        const extraExpensesItems = myAccount.extra_expenses.map(data =>
                <Link className="expend" to="/BevestigenUitgave">
                <GrayBlockItem 
                    addClass="item-overview col"
                    class = {data.class}
                    title = {data.title} 
                    total_price = {data.total_price}/>
                </Link>
        )   

        let data2 = this.props.location.myItems

        if (typeof data2 === 'undefined') {
          // color is undefined
          console.log('oops')
        }
        else{
            let data2 = this.props.location.myItems

            const dataNew = data.map(data =>{
                console.log(data.id_item)

                return data.id_item
            })

            console.log(dataNew)
        }

        return ( 
            <>
            <Header text=""
                    textLink =""/>
            <div className = "container home-page" >
                <Title classes="header-title" text="Overzicht"/> 
                

                <div className="row carousel">

                                    <div className="col slide" id="slide-2">
                    <nav className="sub-header">
                        <ul>
                            <li><a href="#slide-1" >Mijn lijsten</a></li>
                            <li><a href="#slide-2" className="selected">Mijn profiel</a></li>
                            <li><a href="#slide-3">Uitgaven</a></li>                      
                        </ul>
                    </nav>
                    <MoneyBlock
                        timeDate ="Hoeveel staat er op mijn "
                        boldText="bank"
                        toSpend={moneyToSpend}/>

                        <label>
                            <h2 className="title-overview">Vul je spaarpot en maak hem vol!</h2>

                            <div className="money-jar-block">
                            <div className="progress-bar">
                                <div class="bar">
                                    <div className="percentage">
                                    </div>
                                </div>
                            </div>
                            <div className="piggy">
                                <div class="piggy-body">
                                    <p>Totaal gespaard <br /> € 0,-</p>
                                    <div className="leg-1"></div>
                                    <div className="leg-2"></div>
                                    <div className="nose"></div>
                                    <div className="ear"></div>
                                    <div className="tail"></div>
                                    <div className="eye"></div>
                                </div>
                            

                            </div>
                            
                            </div>

                            <Link className="add-activity btn-pink btn add-category" aria-label="Spaarpot" to="/Sparen">Ga naar spaarpot</Link> 

                        </label>
                        
                    </div>
                    


                    <div className="col slide" id="slide-1">
                    <nav className="sub-header">
                        <ul>
                            <li><a href="#slide-1" className="selected">Mijn lijsten</a></li>
                            <li><a href="#slide-2">Mijn profiel</a></li>
                            <li><a href="#slide-3">Uitgaven</a></li>                                   
                        </ul>
                    </nav>
                <MoneyBlock
                    timeDate="Gepland om te"
                    boldText="halen"/>
        
                        <label> 
                            <h2 className="title-overview"><span><img src={todo} alt="todo"/></span>Bekijk mijn gemaakte lijstjes!</h2>
                            {extraExpensesItems}
                              
                        </label>
                        <p className="label-button-text">Ik heb iets gekocht wat niet in mijn lijstjes staat</p>
                        <Link className="plus-icon add-activity btn-pink btn add-category" aria-label="Nog uitgeven" to="/ToevoegenBevestigenUitgave">Nog toevoegen</Link> 
                    </div>



                    <div className="col slide" id="slide-3">
                    <nav className="sub-header">
                        <ul>
                            <li><a href="#slide-1" >Mijn lijsten</a></li>
                            <li><a href="#slide-2">Mijn profiel</a></li>
                            <li><a href="#slide-3" className="selected">Uitgaven</a></li>                                      
                        </ul>
                    </nav>
                    <MoneyBlock
                    timeDate="Wat heb ik uit te geven voor deze"
                    boldText="week"
                    toSpend={moneyToSpendWeek}/>
                        <label className="overview-progressbar-items"> 
                        <h2 className="title-income">Hoeveel heb ik om uit te geven</h2>

                        {categoriesIncome}
                         <Link className="add-activity plus-icon btn-pink btn add-category" aria-label="Afvink lijst" to="/Toevoegen">Uitgaven toevoegen</Link> 
                        </label>
                       
      
                    </div>
                    </div>

                </div>
            </>
        )
    }
}

export default Overview