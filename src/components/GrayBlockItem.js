import React, { Component } from 'react'

class GrayBlockItem extends Component {
    render() {
        return ( 
          <>
            <div className={this.props.addclass}>
                <span className={this.props.class}></span>
                <p className="title">{this.props.title}</p>
                <p className="price">- {this.props.total_price}</p>
             </div>
          </>
        )
    }
}
export default GrayBlockItem