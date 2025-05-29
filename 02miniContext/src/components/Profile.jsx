import React,{ useContext, useState } from 'react'
import UserContext from '../context/UserContext'
function Profile() {
    const {user} = useContext(UserContext) 
    if (!user) {
        return <h1> Please Login First</h1>
    }
    return <h1> Welcome {user.userName}</h1>
}

export default Profile
