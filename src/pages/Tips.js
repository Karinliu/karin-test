import React, { Component } from 'react'
import {Title, Footer, Header} from '../components/';
import { Link } from 'react-router-dom';


class Tips extends Component {
    render() {
        return (
             <>
            <Header text="Terug"
                    textLink ="/Overview"/>
            <div className="container error-page">
              <Title classes="header-title" text="Not Found"/> 

              <div className="row">
                  <div className="col error-block">
                  </div>
              </div>
              <div className="row">
              <div className="col">
                  <Link className="btn btn-pink" to="/Overview">Terug naar overzicht</Link>
              </div>
              </div>
            </div>
            </>
        )
    }
}

export default Tips