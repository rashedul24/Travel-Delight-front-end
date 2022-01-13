import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate,} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({children}) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <div className='text-center m-5'>
      <Spinner animation="border" variant="primary"></Spinner>
    </div> 
  }
  return (
    
      user.displayName ? children :
          <Navigate
            to= "/login" 
          ></Navigate>
    
  );
};

export default PrivateRoute;