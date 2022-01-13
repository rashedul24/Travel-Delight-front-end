import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const { signInUsingGoogle} = useAuth();
  return (
    <div  className='text-center'>
            <h1 >Please Login</h1>
            <button onClick={signInUsingGoogle}  className='btn btn-primary my-4' >Sign In with Google</button>
        </div>
  );
};

export default Login;