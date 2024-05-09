import React from 'react'
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from '@material-tailwind/react';

const PrivateRoutes = ({children}) => {
 const{user,loading}=useAuth()
     const location=useLocation();
     if(loading){
          return <Spinner className='w-full mx-auto' color="amber" />;
     }
       if (!user) {
         return <Navigate to="/login" state={location?.pathname || "/"} />;
       }
  return (
    <div>{children}</div>
  )
}

export default PrivateRoutes