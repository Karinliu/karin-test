import React, { Component } from 'react';
import {Title, Header} from '../components/';

class CheckOffList extends Component {
    render() {
        return (
        	 <>
            <Header text="Terug"
                    textLink ="/"/>
            <div className="container">
              <Title classes="header-title" text="Extra uitgaven"/> 
            </div>

            </>        
        )
    }
}

export default CheckOffList