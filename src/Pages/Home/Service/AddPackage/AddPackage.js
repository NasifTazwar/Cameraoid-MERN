import React from "react";
import { useForm } from "react-hook-form";
import './AddPackage.css';

const AddPackage = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    fetch('https://nameless-cliffs-17759.herokuapp.com/addpackages', {
        method: "POST",
        headers: {"content-type": "application/json", },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(result=> alert("Successfully added a new tour package."))
    reset();
    console.log(data);
};

  return (
    <div className="add-package-container mt-5">
      <h1 className="mb-4">Add A New Package Here</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true})}
          placeholder="Package Name"
          className="p-2 m-2 w-50"
        />
        <br />
        <textarea
          {...register("description", { required: true , maxLength: 200 })}
          placeholder="Description (Maximum 200 characters)"
          className="p-2 m-2 w-50"
        />
        <br />
        <input
          {...register("price", { required: true })}
          placeholder="Price"
          className="p-2 m-2 w-50"
        />
        <br />
        <input
          {...register("img", { required: true })}
          placeholder="Image Link"
          className="p-2 m-2 w-50"
        />
        <br />
        <input type="submit" className="btn btn-dark w-25 mt-4" />
      </form>
    </div>
  );
};

export default AddPackage;
