import React from 'react';
import notFound from '../../images/404.png';

const NotFound = () => {
  return (
    <div>
       <img className='img-fluid' src={notFound} alt="" />
    </div>
  );
};

export default NotFound;