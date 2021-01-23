import React from "react";
import { useForm } from "react-hook-form";

function NewLocationForm() {
    const { register, handleSubmit } = useForm();

    function onSubmit(data) {
        console.log(data);
    }
  return (
    <form 
    className="newLocationForm"
    onSubmit={handleSubmit(onSubmit)} 
    >
      <label htmlFor="title">Title</label>
      <input name="title" required ref={register}/>
      <label htmlFor="comments">Comments</label>
      <textarea name="comments" rows={3} ref={register}></textarea>
      <label htmlFor="description">Description</label>
      <textarea name="description" rows={3} ref={register}></textarea>
      <label htmlFor="image">Image</label>
      <input name="image" ref={register}/>
      <label htmlFor="visitDate">Visit Date</label>
      <input name="visitDate" type="date" required ref={register}/>
      <button>Add Location</button>
    </form>
  );
}

export default NewLocationForm;
