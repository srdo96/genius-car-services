import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div className="text-center mt-5">
      <h2>Welcome to Detail: {serviceId}</h2>
      <div>
        <Link to="/checkout">
          <button className="btn btn-primary mt-3">CheckOut</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
