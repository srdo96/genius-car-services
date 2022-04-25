import React from "react";
import { useParams } from "react-router-dom";
import useServiceDetail from "../../../hooks/useServiceDetail";

const CheckOut = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  return (
    <div className="text-center pt-5">
      <h2>Please Order:</h2>
      <h3>{service.name}</h3>
    </div>
  );
};

export default CheckOut;
