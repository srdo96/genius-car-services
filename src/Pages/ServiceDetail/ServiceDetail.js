import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/service/${serviceId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  console.log(service);
  return (
    <div className="text-center mt-5">
      {/* <h2>Welcome to Detail: {service.name}</h2> */}
      <img className="w-25" src={service.img} alt="" />
      <h2>{service.name}</h2>
      <p>Price: {service.price}</p>
      <div>
        <Link to="/checkout">
          <button className="btn btn-primary mt-3">CheckOut</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
