import React, { useEffect, useState } from "react";

const ManageBooking = () => {
  const [bookings, setbookings] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/bookings")
      .then((res) => res.json())
      .then((data) => setbookings(data));
  }, []);
  const handleDelete = (id) => {
    const url = `http://localhost:5000/bookings/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("Deleted Successfully");
          const rest = bookings.filter((tour) => tour._id !== id);
          setbookings(rest);
        }
      });
  };
  console.log(bookings);
  return (
    <div className="text-center overflow-hidden" >
      <h1 className="mb-3 text-primary fst-italic">Manage Bookings</h1>
      {bookings.map((booking) => (
        <div key={booking._id}>
        
            <img className="w-25 mb-2 rounded" src={booking.tour.img} alt="" />
            <h3>Tour Name: {booking.tour.name}</h3>
            <h4>Client: {booking.client}</h4>
            <button onClick={() => handleDelete(booking._id)} className="btn btn-danger px-3 m-3">Delete</button>

          
            
          
          
        </div>
      ))}
    </div>
  );
};

export default ManageBooking;
