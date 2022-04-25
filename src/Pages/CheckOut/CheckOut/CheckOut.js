import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useServiceDetail from "../../../hooks/useServiceDetail";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import axios from "axios";
import toast from "react-hot-toast";

const CheckOut = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user] = useAuthState(auth);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      serviceId: serviceId,
      address: e.target.address.value,
      phone: e.target.phone.value,
    };
    axios.post("http://localhost:5000/order", order).then((res) => {
      console.log(res);
      const { data } = res;
      if (data.insertedId) {
        toast.success("Your order is booked!!!");
        e.target.reset();
      }
    });
  };

  /*  // user data
  const [user, setUser] = useState({
    name: "Sakib Rahman",
    email: "info@sakib.com",
    address: "Comilla, meghna",
    phone: "01711111111",
  });

  // change/control form value
  const handleAddressChange = (e) => {
    console.log(e.target.value);
    const { address, ...rest } = user;
    const newAddress = e.target.value;
    const newUser = { address: newAddress, ...rest };
    setUser(newUser);
    console.log(newUser);
  }; */
  return (
    <div className="text-center pt-5 w-50 mx-auto">
      <h2>Please Order:</h2>
      <h3>{service?.name}</h3>
      <form onSubmit={handlePlaceOrder}>
        <input
          className="w-100 mb-2"
          type="text"
          name="name"
          placeholder="Name"
          value={user?.displayName}
          readOnly
          disabled
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="email"
          name="email"
          placeholder="Email"
          value={user?.email}
          disabled
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="service"
          value={service?.name}
          placeholder="Service"
          readOnly
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="address"
          placeholder="Address"
          autoComplete="off"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="phone"
          placeholder="Phone"
          required
        />
        <br />
        <input
          className="w-100 mb-2 btn btn-primary"
          type="submit"
          value="Place Order"
        />
      </form>
    </div>
  );
};

export default CheckOut;
