import React from "react";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  // const [email , setEmail] = useState('');
  const [success , setSuccess] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  

  const onSubmit = (data) => {
    fetch("https://lit-refuge-91293.herokuapp.com/users/admin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
            setSuccess(true);
        }
      });
    reset();
    console.log(data);
  };
  return (
    <div className="add-package-container mt-5">
      <h1 className="mb-4">Add An Admin</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email", { required: true })}
          placeholder="email"
          className="p-2 m-2 w-50"
        />
        <br />
        <input type="submit" className="btn btn-dark w-25 mt-4" />
      </form>

      {success && <Alert variant="success">Made admin successfully!</Alert>}
    </div>
  );
};

export default MakeAdmin;
