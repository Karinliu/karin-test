import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class MoneyListItems extends Component {
	constructor(props) {
        super(props);
        this.state = {
              value: 0,
              price: "0,00",
              result: "",
              addClass: 'd-none remove-btn'

        };
        this.buttonClickedAdd = this.buttonClickedAdd.bind(this);
        this.buttonClickedRemove = this.buttonClickedRemove.bind(this);
      }

      buttonClickedAdd(e){
      	console.log(this.state.value)

      	const priceAddValue = e.target.value;
        this.props.addAnimation("coin d-block"); 

      	this.setState({
      		value: this.state.value+1,
      		addClass: "d-block remove-btn"
      	});
      }

      buttonClickedRemove(e){
      	this.setState({value: this.state.value-1});

      	if(this.state.value <= 1){
      		this.setState({
      			addClass: "d-none remove-btn"
      		});
      	}else{
      		return
      	}
      }


	render() {
		return(
	    <div className="col money-items">
            <section>
                <img src={this.props.image_link} alt={this.props.title}/>
              </section>
              {/*<p>total price {this.props.overallNumber}</p>*/}
            <button 
            className={this.state.addClass}
            value={this.props.price}
            onClick={this.buttonClickedRemove}>
              -
            </button>
            <p className="price-item">€ {this.props.price}</p>
            <button 
            	value={this.props.price} 
            	className="add-btn"
            	onClick={this.buttonClickedAdd}>
              {this.state.value}
            </button>
        </div>
      )
  }
}
export default MoneyListItems