import React, { Component } from 'react';
import {Header, MoneyBlock, ChosenCategory} from '../components/';
import {categoriesJson} from '../assets/';

class SaveMoney extends Component {
    render() {
        const clickedPage = categoriesJson.data_category.map(data =>
                    <ChosenCategory 
                    image_purple={data.class} 
                    title={data.title}
                    textLink="/SparenToevoegen"/>
                )[3]

        return (
             <>
            <Header text="Terug"
                    textLink ="/Toevoegen"
                    addClass=""/>
            <div className="container overview-page">
                <MoneyBlock
                    toSpend="100"
                    allMoney="200"/>

                    {clickedPage}
            </div>

            </>
        )
    }
}

export default SaveMoney