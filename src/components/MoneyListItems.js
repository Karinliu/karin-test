import React, { Component } from 'react'
import {Modal8} from './';

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
        this.handler = this.handler.bind(this);
    }

    handler() {
        this.setState({
              disable: "modal d-none"
          });
      }

    buttonClickedAdd(e) {
        console.log(this.state.value)
        let moneyToSpend = this.props.moneyToSpend[0];


        if(moneyToSpend > (e.target.value * 1)){

          // const priceAddValue = e.target.value;

        const priceAddValue = e.target.value;
        this.props.dataAddValue(priceAddValue); 

        this.props.addAnimation("coin d-block");

        this.setState({
            value: this.state.value + 1,
            addClass: "d-block remove-btn"
        });

          this.setState({
            disable: "modal d-none",
          })
        }else{

          this.setState({
              disable: "modal d-block"
            })
        }
    }

    buttonClickedRemove(e) {
        this.setState({ value: this.state.value - 1 });

        if (this.state.value <= 1) {
            this.setState({
                addClass: "d-none remove-btn"
            });
        } else {
            return
        }
    }


    render() {

        return (
          <div className="col money-items">
          < Modal8 
                addClass={this.state.disable}
                action={this.handler}/>
            <label> 
              <input  
                  onClick={this.buttonClickedAdd}
                  value={this.props.price}  
                  className="add-btn" 
                  type="button"/>
                  
                  <section>
                      <img src={this.props.image_link} alt={this.props.title}/>
                  </section>
                  <p className="price-item">€ {this.props.price}</p>
                          
            </label>
              
        </div>
        )
    }
}
export default MoneyListItems