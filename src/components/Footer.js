import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_visible: false
        };
    }

    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function(e) {
            scrollComponent.toggleVisibility();
        });
    }

    toggleVisibility() {
        if (window.pageYOffset > 200) {
            this.setState({
                is_visible: true
            });
        } else {
            this.setState({
                is_visible: false
            });
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        const { is_visible } = this.state;
        return (

            <> 
            
            <footer>
	    		<nav>
		    		<ul>
			    		<li>
			    			<Link className="Home" to="/Overview">Home</Link>
			    		</li>
			    		{is_visible && (
			      		<li>
			    			<button onClick={() => this.scrollToTop()}></button>
						</li>
						)} 
			      	</ul>
		    	</nav>
	    	</footer>
	    	
	    	</>	
        )
    }
}
export default Footer