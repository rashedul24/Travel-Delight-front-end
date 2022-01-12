import React from "react";
import { Link } from "react-router-dom";
import "./SingleTour.css";
const SingleTour = ({ tour }) => {
  const { id, img, name } = tour;
  return (
    <div className="tour col-lg-4 col-md-6">
      <img src={img} alt="" />
      <h2 className="mt-3">{name}</h2>
      <Link to={`/singleTour/${id}`}>
        <button className="btn my-3 btn-info">Book Now</button>
      </Link>
    </div>
  );
};

export default SingleTour;
