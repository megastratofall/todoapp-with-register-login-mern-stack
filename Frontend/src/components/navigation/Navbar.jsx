import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css";
import { useState, useEffect } from 'react';
import axios from "axios";
import toast from "react-hot-toast";
import { FaUserAlt } from 'react-icons/fa';



const Navbar = () => {
const [ user, setUser ] = useState(null)
const navigate = useNavigate();

const getUser = async() =>{
try {
const { data } = await axios.get("/api/users/me");
setUser(data);
} catch (error) {
console.log(error)
}
}

useEffect(()=>{
getUser();
},[]);

const handleLogout = async() => {
try {
await axios.get("/api/auth/logout");
setUser(null);
toast.success("Logged out Successfully");
navigate("/auth");   
} catch (error) {
console.log(error);
}
}

if(!user) return null

return (
<header>
<div className="userInfo">
<FaUserAlt className="userIcon"/>
<div>
<h1 className='name'>{user.name}</h1>
<p className="email">{user.email}</p>
<Link to="/edit-profile" className="editBtn">Edit</Link>
</div>
</div>
<nav>
<button type="button" className="logout" onClick={handleLogout}>
Logout
</button>
</nav>
</header>
)
}

export default Navbar