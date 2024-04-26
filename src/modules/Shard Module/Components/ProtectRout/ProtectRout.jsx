import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectRout({loginData , children}) {
    if(localStorage.getItem('token') || loginData) return children
     else return <Navigate to= '/login'/>
    

  
}
