import React, { Component } from 'react'
import Title from '../components/Title';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
<>
        	<header className="login-header"></header>
            <div className="container login-block">
            	<div className="row logo">
            		<div className="col">
            			<img src={logo} alt="logo"/> 
            		</div>
            	</div>
            	<div className="row">
	              <div className="col">
	              	<Title text="Geld overzicht"/>
	              </div>
            	</div>
            	<div className="row">
            		<div className="col">
            			<p>Login</p>
            			<p>Register</p>
            		</div>
            	</div>
	            <div className="row">
	            	<form className="col" action="">
						<fieldset>
				            <label> 
				    				Assigned location
									<input 
					               		type="text"
					               		placeholder="Location"
					               	/>
							</label>  
							<label> 
				    				Assignee
									<input 
					               		type="text"
					               		placeholder="Find user"
					               	/>
							</label>      	
						</fieldset>

						<Link className="btn btn-pink" to={`/Overview`} >Login </Link>
						
					</form>
	            </div>
            </div>
            </>
            )
            }
        }

export default Login