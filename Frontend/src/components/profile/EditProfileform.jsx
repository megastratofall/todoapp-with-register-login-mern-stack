import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import './EditProfileForm.css';

const EditProfileform = () => {

const [user, setUser] = useState({
name: '',
email: '',
});
    
useEffect(() => {
(
async () => {
try {
const { data } = await axios.get('/api/users/me');
setUser(data);
} catch (err) {
console.log(err);
}})();
}, []);

const updateUserInfo = (e) => {
setUser({
...user,
[e.target.name]: e.target.value,
});
};

const updateProfile = async (e) => {
e.preventDefault();
try {
const res = await axios.put('/api/users/me', user);
toast.success('Profile updated successfully');
setUser(res.data);
} catch (err) {
console.log(err);
}
};

return (
<div className='editProfileForm'>
<a className="backBtn" to="/">
<h2>Home</h2>
</a>
<div className='editProfileForm'>
<h1 className='editph1'>Edit Profile</h1>
<form className="editForm" onSubmit={updateProfile}>
<label htmlFor="name">
Name:
<input
name="name"
type="text"
placeholder="Full Name"
required
value={user.name}
onChange={updateUserInfo}
/>
</label>
<label htmlFor="email">
email:
<input
name="email"
type="email"
placeholder="email"
required
value={user.email}
onChange={updateUserInfo}
/>
</label>
<button type="submit">Save</button>
</form>
</div>
</div>
)
}

export default EditProfileform