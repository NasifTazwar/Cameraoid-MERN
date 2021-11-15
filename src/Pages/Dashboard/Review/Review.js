import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const Review = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("https://lit-refuge-91293.herokuapp.com/addreviews", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => alert("Successfully added your review."));
    reset();
    console.log(data);
  };
  return (
    <div className="add-package-container mt-5">
      <h1 className="mb-4">Add A Review</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
            readOnly
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Name"
          className="p-2 m-2 w-50"
          defaultValue={user?.displayName}
        />
        <br />
        <textarea
          {...register("description", { required: true, maxLength: 500 })}
          placeholder="Description (Maximum 500 characters)"
          className="p-2 m-2 w-50"
        />
        <br />
        <input
            type="number"
            min="1" max="5"
          {...register("rating", { required: true })}
          placeholder="Rating"
          className="p-2 m-2 w-50"
        />
        <br />
        <input
          {...register("img", { required: true })}
          placeholder="Profile Image Link"
          className="p-2 m-2 w-50"
        />
        <br />
        <input type="submit" className="btn btn-dark w-25 mt-4" />
      </form>
    </div>
  );
};

export default Review;
