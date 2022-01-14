import React from 'react';
import { useForm } from "react-hook-form";
import './AddTour.css';


const AddTour = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data)
  };
  return (
    <div className='add-tour mt-3'>
      <h1 className='add-tour mb-4 text-center text-primary fst-italic'>Please Add Your Favourite Tour</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder=' Tour Name' />
      <textarea {...register("description")} placeholder=' Description'/>
      <input {...register("img")}  placeholder=' Image URL'/>
      <input type="submit"/>
    </form>
    </div>
  );
};

export default AddTour;