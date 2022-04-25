import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useServiceDetail from "../../../hooks/useServiceDetail";

const CheckOut = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  // user data
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
  };
  return (
    <div className="text-center pt-5 w-50 mx-auto">
      <h2>Please Order:</h2>
      <h3>{service.name}</h3>
      <form>
        <input
          className="w-100 mb-2"
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="service"
          value={service.name}
          placeholder="Service"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="address"
          placeholder="Address"
          value={user.address}
          onChange={handleAddressChange}
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="phone"
          placeholder="Phone"
          value={user.phone}
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
