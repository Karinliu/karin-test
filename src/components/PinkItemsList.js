import React, { Component } from 'react'

class PinkItemList extends Component {
	render() {
		return(
			<>
          <div className="col">
          <section>
            <img src={this.props.image_link} alt={this.props.title}/>
          </section>
          <p>{this.props.title}</p>
          <p className={this.props.addClass}>€ {this.props.price}</p>
          </div>
     	</>
      )
  }
}
export default PinkItemList