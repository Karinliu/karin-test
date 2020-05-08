import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class GrayBlockItem extends Component {
    render() {
        return ( 
          <>
              <Link className={this.props.addclass} to="/BevestigenUitgave">
                <span className={this.props.class}></span>
                <p className="title">{this.props.title}</p>
                <p className="price">- {this.props.total_price}</p>
              </Link>
          </>
        )
    }
}
export default GrayBlockItem