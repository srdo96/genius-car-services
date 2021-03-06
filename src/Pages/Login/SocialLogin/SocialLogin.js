import React from "react";
import google from "../../../images/social/google.svg";
import github from "../../../images/social/github.svg";
import facebook from "../../../images/social/facebook.svg";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import useToken from "../../../hooks/useToken";
const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const [token] = useToken(googleUser || githubUser);
  let from = location.state?.from?.pathname || "/";

  let errorElement;
  if (googleError || githubError) {
    errorElement = (
      <p className="text-danger">
        Error: {googleError?.message} {githubError?.message}
      </p>
    );
  }

  if (googleLoading || githubLoading) {
    return <Loading />;
  }
  if (token) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className="d-flex align-items-center ">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 p-3">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>

      <div>
        <div className="mx-auto w-50">{errorElement}</div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info d-block mx-auto my-2 w-50"
        >
          <img src={google} alt="" /> Google Sign in
        </button>

        <button
          onClick={() => signInWithGithub()}
          className="btn btn-info d-block mx-auto my-2 w-50"
        >
          <img src={github} alt="" /> Github Sign in
        </button>
        <button className="btn btn-info d-block mx-auto my-2 w-50">
          <img src={facebook} alt="" /> Facebook Sign in
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
