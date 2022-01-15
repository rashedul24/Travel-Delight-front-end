import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./OrderDetails.css";

const OrderDetails = () => {
  const {
    register,
    handleSubmit, reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    console.log(data);
    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert('Tour Booked')
          reset()
       }
      });
  };
  const { id } = useParams();
  const [uniqueTour, setUniqueTour] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/tours/${id}`)
      .then((res) => res.json())
      .then((data) => setUniqueTour(data));
  }, []);
  return (
    <div className="row d-flex">
      <h1 className="text-center fw-bold fst-italic fs-2 mt-3">
        Booking Information
      </h1>
      <div className="my-2 text-center col-6">
        <h4 className="my-5 "> {uniqueTour?.name} </h4>
        <img className="rounded w-75 mb-4" src={uniqueTour?.img} alt="" />
        <p className="mx-4">
          <span className="fw-bold fs-5">
            Description:
            <br />
          </span>
          {uniqueTour?.description}
        </p>
      </div>

      <div className="col-6">
        <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
          <h4 className="ms-5">Client Details</h4>

          <input defaultValue={user.displayName} {...register("name")} />

          <input
            defaultValue={user.email}
            {...register("email", { required: true })}
          />

          {errors.email && (
            <span className="error">This field is required</span>
          )}
          <input placeholder=" Your Address" {...register("address")} />
          <input placeholder=" Your Number" {...register("phone")} />

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default OrderDetails;
