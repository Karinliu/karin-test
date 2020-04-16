import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {App, CheckOffList, AllExpenses, NotFound} from '../pages';

class Header extends Component {
	render() {
		return(
	    <nav>
	    	<ul>
		    	<li>
		    		<Link to="/">Home</Link>
		      	</li>			    	
		      	<li>
		    		<Link to="/AfvinkLijst">Afvink Lijst</Link>
		      	</li>			      	
		      	<li>
		    		<Link to="/AlleUitgaven">Alle uitgaven</Link>
		      	</li>		    	
	    	</ul>
	    </nav>
      )
  }
}
export default Header