import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Modal7 extends Component {


	render() {
		return(

	    <div className={this.props.modalClass}>
	    	<div className="popup-block groceries-modal">
	    		<h2>Lijst is aangemaakt en toegevoegd!</h2>
	    		<p>{this.props.textField}</p>
	    		<Link to="/Overview" className="btn btn-pink ">Ga terug naar overzicht</Link>
	    	</div>
	    </div>
      )
  }
}
export default Modal7