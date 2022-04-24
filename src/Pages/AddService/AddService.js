import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    //   const newService
    fetch("http://localhost:5000/service", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        toast.success("Add Successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // console.log(data);
  };
  return (
    <div className="w-50 mx-auto">
      <Toaster />
      <h3>Please, Add a service</h3>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          className="mb-2"
          placeholder="description"
          {...register("description")}
        />
        <input
          className="mb-2"
          placeholder="price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-2"
          placeholder="photo url"
          type="text"
          {...register("img")}
        />
        <input className="btn btn-primary" value="Add Service" type="submit" />
      </form>
    </div>
  );
};

export default AddService;
