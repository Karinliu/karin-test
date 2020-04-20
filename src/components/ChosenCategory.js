import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class ChosenCategory extends Component {
  render() {
    return(
    	<>
            <div className="row">
                <h2>{this.props.title}</h2>
            </div>
            <div className="row">
                <div className="col">
                    <span aria-hidden="true" className= {"category-image "+ this.props.image_purple}>
                    </span>
                </div>
            </div>
            <div className="row">
                <div className="col category-btn">
                <Link className="btn-pink btn add-category" aria-label="Afvink lijst" to={this.props.textLink}>Toevoegen</Link>
                </div>
            </div>
        </>
    )
  }
}
export default ChosenCategory