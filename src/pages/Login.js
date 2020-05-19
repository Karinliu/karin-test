import React, { Component } from 'react'
import {Title} from '../components/';
import {logo} from '../assets'
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
			<>
        	<header className="login-header"></header>
            <div className="container login-page">
            	<div className="row logo">
            		<div className="col">
            			<img src={logo} alt="logo"/> 
            		</div>
            	</div>
	            <Title text="Jouw persoonlijke overzicht"/>
	            <div className="row">
	            	<form className="col" action="">
						<fieldset>
				            <label> 
									<input 
					               		type="text"
					               		placeholder="Gebruikersnaam"
					               	/>
							</label>  
							<label> 
									<input 
					               		type="password"
					               		placeholder="Wachtwoord"
					               	/>
							</label>      	
						</fieldset>

						<Link className="btn btn-pink" to={`/Overview`} >Login </Link>
						<Link className="create-account" to={`/CreateUser`} ><i>Nog geen account? Registreer nu.</i></Link>
						
					</form>
	            </div>
            </div>
            </>
            )
            }
        }

export default Login