import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return(
	    <header className={this.props.addClass}>
	    	<nav>
		    	<ul>
			    	<li>
			    		<Link className={this.props.text} to={this.props.textLink}>{this.props.text}</Link>
			      	</li>	    	
			      	<li>
			    		<Link className="to-do" aria-label="Afvink lijst" to="/AfvinkLijst"></Link>
			      	</li>			      	
			      	<li>
			    		<Link className="help" aria-label="Help" to="/Help"></Link>
			      	</li>		    	
		    	</ul>
		    </nav>
	    </header>
      )
  }
}
export default Header