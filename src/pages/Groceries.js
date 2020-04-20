import React, { Component } from 'react';
import {Header, MoneyBlock, ChosenCategory} from '../components/';
import {categoriesJson} from '../assets/';

class Groceries extends Component {
    render() {
        const clickedPage = categoriesJson.data_category.map(data =>
                    <ChosenCategory 
                    image_purple={data.class} 
                    title={data.title}
                    textLink="/BoodschappenToevoegen"/>
                )[0]

        return (
             <>
            <Header text="Terug"
                    textLink ="/Overview"
                    addClass=""/>
            <div className="container groceries-page">
                <MoneyBlock
                    toSpend="250"
                    allMoney="400"/>

                    {clickedPage}
            </div>

            </>
        )
    }
}

export default Groceries