import React, { Component } from 'react';
import {Title, Footer, Header, TemplateCategory} from '../components/';
import {categoriesJson} from '../assets/';

class Help extends Component {
    render() {
        const templateCategory = categoriesJson.data_help.map(data =>
                    <TemplateCategory 
                        image_purple={data.class} 
                        text={data.title}
                        text_link={data.text_link}
                        />
                )
        console.log(categoriesJson.data_help.map(data => data.title))
        return (
             <>
            <Header text="Terug"
                    textLink ="/Overview"/>
            <div className="container background-gray help-page">
                    <Title classes="header-title" text="Help"/> 
                <nav className="row category">
                    <ul className="col">

                    {templateCategory}
                        
                    </ul>
                </nav>
            </div>

            <Footer/>  

            </>
        )
    }
}

export default Help