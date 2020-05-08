import React, { Component } from 'react'
import {Modal} from './';

class PinkItemsList3 extends Component {
  constructor(props) {
        super(props);
        this.state = {
              value: 0,
              price: "0,00",
              result: "",
              addClass: 'd-none remove-btn',
              disable: "modal d-none"

        };
        this.buttonClickedAdd = this.buttonClickedAdd.bind(this);
        this.buttonClickedRemove = this.buttonClickedRemove.bind(this);
        this.handler = this.handler.bind(this);
      }
      
      buttonClickedAdd(e) {
        // this.setState({value: this.state.value+1});
        
        let moneyToSpend = this.props.moneyToSpend[0];
        if(moneyToSpend > (e.target.value * 1)){
          this.setState({value: this.state.value+1});

          let price = (this.state.value + 1.00)* e.target.value
        // const price = ( 0.1 * 10 + 0.2 * 10 ) / 10

        price = parseFloat(price).toFixed(2);

        const priceAddValue = e.target.value;
        this.props.dataAddValue(priceAddValue); 

        this.setState({
          price: price,
          addClass: "d-block remove-btn"
        })


          this.setState({
            disable: "modal d-none"
          })
        }else{
          this.setState({value: this.state.value + 0});

          console.log("WOW STOP")

          this.setState({
              disable: "modal d-block"
            })
        }
      }

      handler() {
        this.setState({
              disable: "modal d-none"
          });
      }

      buttonClickedRemove(e) {
        if(this.state.value > "0"){
          // this.setState({value: this.state.value - 1});          

          let moneyToSpend = this.props.moneyToSpend[0];

          moneyToSpend = Number(moneyToSpend) + Number(e.target.value)

          moneyToSpend = parseFloat(moneyToSpend).toFixed(2);

          console.log(moneyToSpend)

        if(moneyToSpend > (e.target.value * 1)){
          this.setState({value: this.state.value - 1});

          let price = (this.state.value - 1.00)* e.target.value
          // const price = ( 0.1 * 10 + 0.2 * 10 ) / 10

          price = parseFloat(price).toFixed(2);

          const priceRemoveValue = e.target.value;
          this.props.dataRemoveValue(priceRemoveValue); 

          this.setState({
            price: price
          })

          this.setState({
            disable: "modal d-none"
          })
        }else{
          this.setState({
              disable: "modal d-block"
            })
        }

        }else {
          return;
        }

        if (this.state.price === e.target.value){
          this.setState({
          addClass: "d-none remove-btn"
        })
        }
      }


    render() {

        return ( 
          <>
              < Modal 
                addClass={this.state.disable}
                action={this.handler}/>
              <div className="col">
                  <section>
                    <img src={this.props.image_link} alt={this.props.title}/>
                  </section>
                  {/*<p>total price {this.props.overallNumber}</p>*/}
                <p className="overall-price">the price is  
                {this.props.totalValue}</p>
                <p className="title-item">{this.props.title}</p>
                <button value={this.props.price} className={this.state.addClass} onClick={this.buttonClickedRemove}>
                  -
                </button>
                <p className="price-item">€ {this.props.price}</p>
                <button value={this.props.price} className="add-btn" onClick={this.buttonClickedAdd}>
                  {this.state.value}
                </button>
              </div>
          </>
        )
    }
}
export default PinkItemsList3