import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_visible: "d-none",
            footerVisibility: "d-block"
        };
    }

    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function(e) {
            scrollComponent.toggleVisibility();
            scrollComponent.toggleVisibilityFooter();
        });
    }

    toggleVisibilityFooter(){
            if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
                this.setState({
                    footerVisibility: "d-none"
                });
            }else{
                this.setState({
                    footerVisibility: "d-block"
                });
            }
    }

    toggleVisibility() {
        // console.log(window.pageYOffset)
        if (window.pageYOffset > 200) {
            this.setState({
                is_visible: "d-block"
            });
        } else {
            this.setState({
                is_visible: "d-none"
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
        // const { is_visible } = this.state.is_visible;
        // const { footerVisibility } = this.state.footerVisibility;
        return (

            <> 
            <footer className ={this.state.footerVisibility}>
	    		<nav>
		    		<ul>
			    		<li>
			    			<Link className="Home" to="/Overview">Home</Link>
			    		</li>

			      		<li className={this.state.is_visible}>
			    			<button onClick={() => this.scrollToTop()}></button>
						</li>
			      	</ul>
		    	</nav>
	    	</footer>
	    	</>	
        )
    }
}
export default Footer