import React, { Component } from 'react';
import {Title, Footer, Header} from '../components/';

class ExtraExpenses extends Component {
    render() {
        return (
        	 <>
            <Header text="Terug"
                    textLink ="/"/>
            <div className="container">
              <Title classes="header-title" text="Extra uitgaven"/> 
            </div>

            <Footer/>  

            </>      

        )
    }
}

export default ExtraExpenses