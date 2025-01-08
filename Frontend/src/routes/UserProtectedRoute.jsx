import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext'

const UserProtectedRoute = ({element:Component,user,setUser,handleCart}) => {
    const { isAuthenticated} = useAuth()
    
      
    return isAuthenticated ? <Component user={user} handleCart={handleCart} setUser ={setUser} /> : <Navigate to="/login" />;
}

export default UserProtectedRoute