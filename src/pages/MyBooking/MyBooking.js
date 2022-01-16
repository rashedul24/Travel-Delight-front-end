import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyBooking = () => {
  const { user } = useAuth();
  const [myBookings, setMyBookings] = useState([]);
  
  useEffect(() => {
    fetch("https://pacific-reaches-16033.herokuapp.com/Bookings")
    .then((res) => res.json())
      .then((data) => {
        setMyBookings(data.filter(booking => booking.email === user.email))
      });
  }, []);
  const handleDeleteBooking = (id) => {
    const permit = window.confirm('Are you sure? Deleted data can not retrieve.');
    if (permit) {
      const url = `https://pacific-reaches-16033.herokuapp.com/bookings/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.deletedCount) {
          alert("Deleted Successfully");
          const rest = myBookings.filter((tour) => tour._id !== id);
          setMyBookings(rest);
        }
      });
    }
  };
  // const booking = myBookings.filter(booking => booking.email === user.email);
  return (
    <div className="text-center" >
      <h1 className="mb-3 text-primary fst-italic">{user.displayName}'s Booking</h1>
      {
        myBookings.map(singleBooking => <div key={singleBooking._id}>
          
          <img className="w-25 mb-2 rounded" src={singleBooking.tour.img} alt="" />
          <h3>Tour Name: {singleBooking.tour.name}</h3>
          <button onClick={() => handleDeleteBooking(singleBooking._id)} className="btn btn-danger px-3 m-3">Delete</button>
          
        </div>)
      }
    </div>
  );
};

export default MyBooking;