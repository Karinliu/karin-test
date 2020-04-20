import React, { Component } from 'react';
import {Title, Header} from '../components/';

class Help extends Component {
    render() {
        return (
        	 <>
            <Header text="Terug"
                    textLink ="/Overview"/>
            <div className="container">
              <Title classes="header-title" text="Help"/> 
            </div>

            </>
        )
    }
}

export default Help