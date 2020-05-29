import React, { Component } from 'react'
// import { Link } from 'react-router-dom';

class Modal8 extends Component {


	render() {
		return(

	    <div className={this.props.addClass}>
	    	<div className="popup-block">
	    		<h2>Ohh.. Je hebt niet genoeg geld om in je spaarpot te stoppen :(</h2>
	    		<button onClick={this.props.action} className="btn btn-pink ">Ga terug naar sparen</button>
	    	</div>
	    </div>
      )
  }
}
export default Modal8