import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import "./authForm.css";

const Login = () => {
const navigate = useNavigate();

const login = async(e) => {

e.preventDefault();

const email = e.target.email.value;
const password = e.target.password.value;

try {
await axios.post("/api/auth/login", { email, password });
//si loguea correctamente que navegue a la homepage
navigate("/");
toast.success("Login Success");

} catch (error) {
console.log(error);
toast.error("Login Failed");
}
}

return (
<div className='login'>
<button className='title'>Login</button>
<form className='authForm' onSubmit={login}>
<label className='input-label' htmlFor="email">
Email
<input id="input_login" type="email" name='email' placeholder='email' required/>
</label>
<label className='input-label' htmlFor="password">
Password
</label>
<input id="input_login" type="password" name='password' placeholder='password' required/>
<br/>
<button id="log_button" type='submit'>Login</button>
</form>
</div>
)
}

export default Login