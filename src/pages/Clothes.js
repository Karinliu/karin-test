import React, { Component } from 'react';
import {Header, MoneyBlock, ChosenCategory} from '../components/';
import {categoriesJson} from '../assets/';

class Clothes extends Component {
    render() {
        const clickedPage = categoriesJson.data_category.map(data =>
                    <ChosenCategory 
                    image_purple={data.class} 
                    title={data.title}
                    textLink="/KledingToevoegen"/>
                )[1]

        return (
             <>
            <Header text="Terug"
                    textLink ="/Overview"
                    addClass=""/>
            <div className="container groceries-page">
                <MoneyBlock
                    toSpend="100"
                    allMoney="200"/>

                    {clickedPage}
            </div>

            </>
        )
    }
}

export default Clothes