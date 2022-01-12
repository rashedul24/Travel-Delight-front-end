import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TourDetails = () => {
  const { id } = useParams();
  const [tourDetails, setTourDetails] = useState([]);
  const [uniqueTour, setUniqueTour] = useState({});
  useEffect(() => {
    fetch("/tours.json")
      .then(res => res.json())
      .then(data => setTourDetails(data))
  }, []);

  useEffect(() => {
    const tour = tourDetails.find(tourInfo => tourInfo?.id === id) 
    setUniqueTour(tour)
  },[tourDetails])
  return (
    <div>
      <div className='my-2 text-center'>
      <h1 className='my-5 fst-italic'> {uniqueTour?.name} </h1>
      <img className='rounded mb-4' src={uniqueTour?.img} alt="" />
        <p><span className='fw-bold fs-2'>Description:
          <br />
        </span >{uniqueTour?.description}</p>
    </div>
    </div>
  );
};

export default TourDetails;