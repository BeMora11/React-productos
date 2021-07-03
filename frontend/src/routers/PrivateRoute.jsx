import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../config/auth';

const PrivateRoute = (props) => {

  const user = auth.getUsuario();

  if(!user) return <Redirect to='/' />

  return (
    <Route {...props} />
  )
}

export default PrivateRoute
