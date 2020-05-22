import React, { Component } from 'react'
// import { Link } from 'react-router-dom';

class ProgressBar extends Component {
  render() {

    return(
    	<>
            <div className="col item-overview progressbar">
                <div className="procentbar" style={{width: this.props.percentage}}>

                </div>
                <div class="procentbar-text">
                   <div className="categorie-title">
                        <p>{this.props.text}</p>
                        <span className={this.props.image_purple}></span>
                   </div>
                    <div className="price-bar">
                        <p><b>€ {this.props.toSpend}</b> <br/></p>
                        <span>van de € {this.props.toSpendMaxPrice}</span>
                    </div>
                </div>
                
            </div>
        </>
    )
  }
}
export default ProgressBar