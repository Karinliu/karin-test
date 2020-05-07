import React, { Component } from 'react'

class PinkItemsList3 extends Component {
  constructor(props) {
        super(props);
        this.state = {
              value: 0,
              price: "0,00",
              result: "",
              addClass: 'd-none remove-btn',

        };
        this.buttonClickedAdd = this.buttonClickedAdd.bind(this);
        this.buttonClickedRemove = this.buttonClickedRemove.bind(this);
      }
      
      buttonClickedAdd(e) {
        this.setState({value: this.state.value+1});

        let price = (this.state.value + 1.00)* e.target.value
        // const price = ( 0.1 * 10 + 0.2 * 10 ) / 10

        price = parseFloat(price).toFixed(2);
        
        // this.props.addValue(e.target.value);

        const priceAddValue = e.target.value;
        this.props.dataAddValue(priceAddValue); 

        this.setState({
          price: price,
          addClass: "d-block remove-btn"
        })
      }

      buttonClickedRemove(e) {
        console.log(this.state.price)
        console.log(e.target.value)

        if(this.state.value > "0"){
          this.setState({value: this.state.value - 1});

          let price = (this.state.value - 1.00)* e.target.value
          // const price = ( 0.1 * 10 + 0.2 * 10 ) / 10

          price = parseFloat(price).toFixed(2);
          // this.props.sendData(e.target.value);

          console.log(e.target.value)

          const priceRemoveValue = e.target.value;
          this.props.dataRemoveValue(priceRemoveValue); 

          this.setState({
            price: price
          })
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
              <div className="col">
                  <section>
                    <img src={this.props.image_link} alt={this.props.title}/>
                  </section>
                  {/*<p>total price {this.props.overallNumber}</p>*/}
                <p className="overall-price">the price is  
                {this.state.price}</p>
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