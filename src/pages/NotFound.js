import React, { Component } from 'react'
import {Title, Header} from '../components/';
import { Link } from 'react-router-dom';


class NotFound extends Component {
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
              <div className="col col-md-10 col-lg-6 btn-block">
                  <Link className="btn btn-pink" to="/Overview">Terug naar overzicht</Link>
              </div>
              </div>
            </div>

            </>
        )
    }
}

export default NotFound