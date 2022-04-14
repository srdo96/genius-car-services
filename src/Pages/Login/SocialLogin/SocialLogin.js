import React from "react";
import google from "../../../images/social/google.svg";
import github from "../../../images/social/github.svg";
import facebook from "../../../images/social/facebook.svg";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }

  if (user) {
    navigate("/home");
  }
  return (
    <div>
      <div className="d-flex align-items-center ">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 p-3">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info d-block mx-auto my-2 w-50"
        >
          <img className="" src={google} alt="" /> Google Sign in
        </button>
        <button className="btn btn-info d-block mx-auto my-2 w-50">
          <img className="" src={github} alt="" /> Github Sign in
        </button>
        <button className="btn btn-info d-block mx-auto my-2 w-50">
          <img className="" src={facebook} alt="" /> Facebook Sign in
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
