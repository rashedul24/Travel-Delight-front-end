import axios from 'axios';
import React from 'react';
import { useForm} from "react-hook-form";
import './AddTour.css';


const AddTour = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data)

    axios.post('http://localhost:5000/tours', data)
      .then(res => {
        if (res.data.insertedId) {
          alert('Tour added successfully')
          reset();
      }
    })
  };
  return (
    <div className='add-tour mt-3'>
      <h1 className='add-tour mb-4 text-center text-primary fst-italic'>Please Add Tour</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 70 })} placeholder=' Tour Name' />
      <textarea {...register("description")} placeholder=' Description'/>
      <input {...register("img")}  placeholder=' Image URL'/>
      <input type="submit"/>
    </form>
    </div>
  );
};

export default AddTour;