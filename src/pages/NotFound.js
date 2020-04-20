import React, { Component } from 'react'
import {Title, Header} from '../components/';

class NotFound extends Component {
    render() {
        return (
        	 <>
            <Header text="Terug"
                    textLink ="/"/>
            <div className="container">
              <Title classes="header-title" text="Not Found"/> 
            </div>

            </>
        )
    }
}

export default NotFound