import React,{useContext}from 'react';
import UserContext from '../context/UserContext';
import User from '../../../07reactRouter/src/components/User/User';


function Profile() {

    const {user}=useContext(UserContext)
    
    if(!user)return <div>Please Login</div>

    return <div>Welcome  {user.username}</div>
}

export default Profile;