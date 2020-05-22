import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Modal5 extends Component {


	render() {
		return(

	    <div className={this.props.addClass}>
	    	<div className="popup-block">
	    		<h2>Lijst is verwijderd!</h2>
	    		<Link to="/Overview" className="btn btn-pink ">Ga terug naar overzicht</Link>
	    	</div>
	    </div>
      )
  }
}
export default Modal5