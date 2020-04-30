import React, { Component } from 'react'
import { myAccount } from '../assets/';

class PinkItemsList2 extends Component {
    render() {

        const moneyToSpend = myAccount.my_account.map(data =>
            data.total_money)

        return ( 
          <>
            <div className="col">
                        <label> 
                          <input 
                            checked={this.props.checked} 
                            type="checkbox" 
                            id={this.props.id_item} 
                            name={this.props.id_item} 
                            value={this.props.id_item} 
                            onClick={this.props.handleClick}
                          />
                          <span>✓</span>
                          <section>
                            <img src={this.props.image_link} alt={this.props.title}/>
                          </section>
                          <p className="title-item">{this.props.title}</p>
                  </label>
            </div> 
          </>
        )
    }
}
export default PinkItemsList2