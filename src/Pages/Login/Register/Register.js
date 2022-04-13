import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const pass = e.target.password.value;
  };
  const navigateLogin = () => {
    navigate("/login");
  };
  return (
    <div className="register-form mt-4">
      <h2 style={{ textAlign: "center" }}>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" placeholder="Your Name" id="" />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
          required
        />
        <input type="password" name="" id="" placeholder="Password" required />

        <input type="submit" value="Register" />
      </form>
      <p>
        New to Genius Car?{" "}
        <Link
          to="/login"
          className="text-danger pe-auto text-decoration-none"
          onClick={navigateLogin}
        >
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
