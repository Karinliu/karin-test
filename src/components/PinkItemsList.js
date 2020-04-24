import React, { Component } from 'react'

class PinkItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };


  }

	render() {
        const handleClick = (e) => {
            this.props.onClick(e.target.value)
        }

		return(
			<>
          <div className="col">
          <section>
            <img src={this.props.image_link} alt={this.props.title}/>
          </section>
          <p>{this.props.title}</p>
          <p>You clicked {this.state.overallNumber} times</p>
          <p>You clicked {this.state.count} times</p>
          <button className="remove-btn" onClick={this.props.btnClick}>-</button>
          <p className="price-item">€ {this.props.price}</p>
          <button className="add-btn" onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
          </div>
     	</>
      )
  }
}
export default PinkItemList