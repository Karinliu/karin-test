import React, { Component } from 'react'
import { myAccount } from '../assets/';

class PinkLinkList extends Component {
    render() {
        return ( 
          <>
            <div className="col">
                <a href={this.props.user_link}>
                  <section>
                    <img src={this.props.image_link} alt={this.props.title}/>
                  </section>
                  <p className="title-item">{this.props.contact}</p>
                </a>
            </div> 
          </>
        )
    }
}
export default PinkLinkList