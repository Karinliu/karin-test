import React, { Component } from 'react';
import Title from '../components/Title';
import Header from '../components/Header';

class Overview extends Component {
    render() {
        return (
			<>
        	<Header/>
            <div className="container">
              <Title text="Overzicht"/>
            </div>
            </>
        )
    }
}

export default Overview