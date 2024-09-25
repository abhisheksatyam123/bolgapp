import React, { } from "react";
import { Link, } from "react-router-dom";

const Login = () => {
	return (
		<div className='auth'>
			<h1> Login </h1>
			<form>
				<input Required type="text" placeholder='username'/>
				<input Required type="password" placeholder='password'/>
				<button>Login </button>
				<p>This is an error</p>
				<span>
					You dont have and account
					<Link to="./register">Register</Link>
				</span>

			</form>
		</div>
	)
}

export default Login
