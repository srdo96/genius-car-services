import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useServiceDetail from "../../hooks/useServiceDetail";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  console.log(service);
  return (
    <div className="text-center mt-5">
      <h1>You are about to Book</h1>
      <h4>{service.name}</h4>
      <img className="w-25" src={service.img} alt="" />
      <p>Price: {service.price}</p>
      <div>
        <Link to={`/checkout/${serviceId}`}>
          <button className="btn btn-primary mt-3">CheckOut</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
