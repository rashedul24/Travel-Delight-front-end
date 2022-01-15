import React, { useEffect, useState } from "react";
import SingleTour from "../SingleTour/SingleTour";

const AllTour = () => {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    fetch("https://pacific-reaches-16033.herokuapp.com/tours")
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);
  return (
    <div className="row">
      <h1 className="text-primary text-center my-4">Upcoming Tours</h1>

      {tours.map((tour) => (
        <SingleTour key={tour._id} tour={tour}></SingleTour>
      ))}
    </div>
  );
};

export default AllTour;
