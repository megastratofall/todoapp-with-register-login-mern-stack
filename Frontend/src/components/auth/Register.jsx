import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import "./authForm.css";


const Register = () => {

const register = async(e) => {

e.preventDefault();

const user = {
    name: e.target.name.value,
    email: e.target.email.value,
    password: e.target.password.value,
};
try {
await axios.post("/api/auth/register", user);
toast.success("Register Successful")
} catch (error) {
console.log(error);
toast.error("Register Failed");
}
}

return (
<div className='register'>
<button className='title'>Register</button>
<form className='authForm' onSubmit={register}>
<label htmlFor='name'>
Name
<input id='input_register' name="name" type="name" placeholder='name' required/>
</label>
<label htmlFor='email'>
Email
<input id='input_register' name="email" type="email" placeholder='email' required/>
</label>
<label htmlFor='password'>
Password
<input id='input_register' name="password" type="password" placeholder='password' required/>
</label>
<button id='reg_button' type='submit'>Register</button>
</form>
</div>
)
}

export default Register