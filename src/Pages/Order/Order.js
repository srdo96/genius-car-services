import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../../api/axiosPrivate";
import auth from "../../firebase.init";

const Order = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;
      console.log(email);
      const url = `https://sheltered-everglades-57475.herokuapp.com/order?email=${email}`;
      try {
        //   axios with headers
        /* const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }); */
        // axios with interceptors
        const { data } = await axiosPrivate.get(url);
        setOrders(data);
      } catch (error) {
        console.error(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          console.log("logout");
          navigate("/login");
        }
      }
    };
    getOrders();
  }, [user]);

  return (
    <div className="w-50 mx-auto">
      <h2>Your Orders: {orders.length}</h2>
      {orders.map((o) => (
        <div key={o._id}>
          <p>{o.service}</p>
        </div>
      ))}
    </div>
  );
};

export default Order;
