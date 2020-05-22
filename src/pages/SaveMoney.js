import React, { Component } from 'react';
import {Header, MoneyBlock, ChosenCategory} from '../components/';
import {categoriesJson, myAccount} from '../assets/';

class SaveMoney extends Component {
    render() {
        const clickedPage = categoriesJson.data_category.map(data =>
                    <ChosenCategory 
                    image_purple={data.class} 
                    title={data.title}
                    textLink="/SparenToevoegen"/>
                )[3]

        const moneyToSpend = myAccount.my_account.map(data =>
            data.total_money/4-15-60-14-5)

        return (
             <>
            <Header text="Terug"
                    textLink ="/Toevoegen"
                    addClass=""/>
            <div className="container overview-page">
                <MoneyBlock
                    timeDate="Te besteden voor deze"
                    boldText="week"
                    toSpend={moneyToSpend}/>

                    {clickedPage}
            </div>

            </>
        )
    }
}

export default SaveMoney