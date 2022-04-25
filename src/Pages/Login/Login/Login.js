import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Link as button,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

// import { Toast } from "react-toastify/dist/components";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import axios from "axios";
import useToken from "../../../hooks/useToken";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const location = useLocation();

  let from = location.state?.from?.pathname || "/home";

  const [token] = useToken(user);

  if (loading || sending) {
    return <Loading></Loading>;
  }
  if (token) {
    navigate(from, { replace: true });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
  };
  const resetPass = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    if (email) {
      toast.success("email Sent");
    } else {
      toast.error("Please enter email address");
    }
    // Toast("Email Sent!");
    // alert("Sent email");
  };
  const navigateRegister = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  return (
    <div className="container w-50 mx-auto">
      <PageTitle title={"Login"}></PageTitle>
      <h2 className="text-primary text-center mt-3">Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        {loading && <Loading></Loading>}
        {errorElement}
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <p>
        Forget password!!
        <button
          className="btn btn-link text-danger p-2 pe-auto text-decoration-none"
          onClick={resetPass}
        >
          Reset password
        </button>
      </p>
      <p>
        New to Genius Car?{" "}
        <Link
          to="/register"
          className="text-danger pe-auto text-decoration-none"
          onClick={navigateRegister}
        >
          Please Register
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
