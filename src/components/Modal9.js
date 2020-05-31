import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Modal9 extends Component {
	constructor(props) {
        super(props);
        this.state = {
         		dNone: "d-none"

        };
        this.buttonClickedAdd = this.buttonClickedAdd.bind(this);
      }

	buttonClickedAdd(e){
		console.log("clicked")
		const send = this.state.dNone

		this.props.handleModal(send); 
	}

	render() {
		return(

	    <div className={this.props.addClass}>
	    	<div className="popup-block">
	    		<h2>Geld is uit varken gehaald!</h2>
	    		<Link to="/Overview" className="btn btn-pink ">Ga terug naar overzicht</Link>
	    		<button className="btn btn-pink" onClick={this.buttonClickedAdd} >Ga terug naar sparen</button>
	    	</div>
	    </div>
      )
  }
}
export default Modal9