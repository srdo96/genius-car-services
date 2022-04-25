import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Register.css";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";
import useToken from "../../../hooks/useToken";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true,
    });
  const [termsAgree, setTermsAgree] = useState(false);
  const navigate = useNavigate();
  const [updateProfile, updating, profileError] = useUpdateProfile(auth);
  const [token] = useToken(user);

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const pass = e.target.pass.value;
    await createUserWithEmailAndPassword(email, pass);
    await updateProfile({ displayName: name });
    // alert("Updated profile");
  };

  if (loading) {
    <Loading></Loading>;
  }
  if (token) {
    navigate("/");
  }
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
        <input
          type="password"
          name="pass"
          id=""
          placeholder="Password"
          required
        />
        <input
          onClick={() => setTermsAgree(!termsAgree)}
          type="checkbox"
          name="terms"
          id=""
        />
        <label
          className={`ms-2 ${termsAgree ? "text-primary" : "text-danger"}`}
          htmlFor="terms"
        >
          Accept terms and condition
        </label>
        <br />
        <p className="text-danger mt-2">{error && error.message}</p>
        <input
          disabled={!termsAgree}
          className="btn btn-primary mt-3"
          type="submit"
          value="Register"
        />
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
