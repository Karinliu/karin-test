import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Modal extends Component {


	render() {
		return(

	    <div className={this.props.addClass}>
	    	<div className="popup-block">
	    		<h2>Lijstje is afgevinkt</h2>
	    		<Link to="/Overview" className="btn btn-pink ">Okay!</Link>
	    	</div>
	    </div>
      )
  }
}
export default Modal