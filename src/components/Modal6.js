import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Modal6 extends Component {


	render() {
		return(

	    <div className={this.props.addClass}>
	    	<div className="popup-block groceries-modal">
	    		<h2>Lijst is aangemaakt en toegevoegd! Geld over? Stop het in je spaarpot!</h2>
	    		<p>{this.props.textField}</p>
	    		<Link to="/SparenToevoegen" className="btn btn-pink ">Ga naar sparen</Link>
	    		<Link to="/Overview" className="btn btn-pink ">Ga terug naar overzicht</Link>
	    	</div>
	    </div>
      )
  }
}
export default Modal6