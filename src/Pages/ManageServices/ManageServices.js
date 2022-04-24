import React from "react";
import toast, { Toaster } from "react-hot-toast";
import useServices from "../../hooks/useServices";

const ManageServices = () => {
  const [services, setServices] = useServices();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          toast.success("Delete Successful");
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };
  //   console.log(services);
  return (
    <div className="w-50 mx-auto">
      <Toaster />
      <h2>Manage Your Services</h2>
      {services.map((service) => (
        <div key={service._id}>
          <h5>
            {service.name}{" "}
            <button
              onClick={() => handleDelete(service._id)}
              className="btn btn-danger"
            >
              x
            </button>
          </h5>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
