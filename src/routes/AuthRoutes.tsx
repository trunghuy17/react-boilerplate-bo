import React from 'react'
import { Navigate } from 'react-router';
import { PATH } from '../configs';


function AuthRoutes({ children }: React.PropsWithChildren) {
  const access_token = window.localStorage.getItem('access_token');

  if (!access_token) {
    return <Navigate to={PATH.LOGIN} />
  }

  return children;
}

export default AuthRoutes