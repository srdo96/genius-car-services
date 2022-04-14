import React from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Register.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const pass = e.target.pass.value;
    console.log(email, pass);
    createUserWithEmailAndPassword(email, pass);
  };
  const navigateLogin = () => {
    navigate("/login");
  };

  if (user) {
    navigate("/");
  }
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
        <input
          type="password"
          name="pass"
          id=""
          placeholder="Password"
          required
        />

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
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
