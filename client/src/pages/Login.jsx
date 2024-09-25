import React, { } from "react";
import { Link, } from "react-router-dom";

const Login = () => {
	return (
		<div className='auth'>
		<h1> Login </h1>
		<form>
			<input type="text" placeholder='username'/>
			<input type="password" placeholder='password'/>
			<button>Login </button>
		</form>
		<p>This is an error</p>
		<span>
		You dont have and account
		<Link to="./register">Register</Link>
		</span>
		</div>
	)
}

export default Login
