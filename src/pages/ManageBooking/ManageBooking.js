import React, { useEffect, useState } from "react";

const ManageBooking = () => {
  const [bookings, setbookings] = useState([]);
  useEffect(() => {
    fetch("https://pacific-reaches-16033.herokuapp.com/bookings")
      .then((res) => res.json())
      .then((data) => setbookings(data));
  }, []);
  const handleDelete = (id) => {
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
          const rest = bookings.filter((tour) => tour._id !== id);
          setbookings(rest);
        }
      });
    }
  };
  return (
    <div className="text-center" >
      <h1 className="mb-3 text-primary fst-italic">Manage Bookings</h1>
      {bookings.map((booking) => (
        <div key={booking._id}>
        
            <img className="w-25 mb-2 rounded" src={booking.tour.img} alt="" />
            <h3>Tour Name: {booking.tour.name}</h3>
            <h4>Client: {booking.client}</h4>
            <h5>Email: {booking.email}</h5>
            <button onClick={() => handleDelete(booking._id)} className="btn btn-danger px-3 m-3">Delete</button>

          
            
          
          
        </div>
      ))}
    </div>
  );
};

export default ManageBooking;
