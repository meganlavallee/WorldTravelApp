import React from "react";

function NewLocationForm() {
  return (
    <form className="newLocationForm">
      <label htmlFor="title">Title</label>
      <input name="title" required />
      <label htmlFor="comments">Comments</label>
      <textarea name="comments" rows={3}></textarea>
      <label htmlFor="description">Description</label>
      <textarea name="description" rows={3}></textarea>
      <label htmlFor="image">Image</label>
      <input name="image" />
      <label htmlFor="visitDate">Visit Date</label>
      <input name="visitDate" type="date" required />
    </form>
  );
}

export default NewLocationForm;
