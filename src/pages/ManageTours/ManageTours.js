import React, { useEffect, useState } from 'react';

const ManageTours = () => {
  const { tours, setTours } = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/tours")
  //     .then(res => res.json())
  //   .then(data=>setTours(data))
  // },[])
  return (
    <div>
      <h1>Manage Tours</h1>
      {
        
      }
    </div>
  );
};

export default ManageTours;