import React, { Component } from 'react';
import {Title, Footer, Header} from '../components/';

class AllExpenses extends Component {
    render() {
        return (
        	 <>
            <Header text="Terug"
                    textLink ="/"/>
            <div className="container">
              <Title classes="header-title" text="Alle uitgaven"/> 
            </div>

            <Footer/>

            </>
        )
    }
}

export default AllExpenses