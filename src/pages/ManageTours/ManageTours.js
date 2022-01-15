import React, { useEffect, useState } from 'react';

const ManageTours = () => {
  const [ tours, setTours ] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/tours')
      .then(res => res.json())
    .then(data=>setTours(data))
  }, [])
  const handleDelete = id => {
    const url = `http://localhost:5000/tours/${id}`;
    fetch(url, {
      method:'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.deletedCount) {
          alert('Deleted Successfully')
          const rest = tours.filter(tour => tour._id !== id);
          setTours(rest);
        }
    })
      
  }
  return (
    <div className='text-center'>
      <h1>Manage Tours</h1>
      {
        tours.map(tour => <div key={tour._id}>
          <h3>{tour.name}</h3>
          <button onClick={()=> handleDelete(tour._id)}>Delete</button>
          
        </div>)
      }
    </div>
  );
};

export default ManageTours;