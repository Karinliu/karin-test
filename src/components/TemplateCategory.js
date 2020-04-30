import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class TemplateCategory extends Component {
  render() {
    return (
    	<>
    		<li><Link to={this.props.text_link}><span className={this.props.image_purple}></span>{this.props.text}</Link></li>	
		</>
    	)
  }
}
export default TemplateCategory