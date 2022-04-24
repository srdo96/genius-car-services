import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Toaster } from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
// import { toast } from "react-toastify";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return (
      <div>
        <ToastContainer />
        <h3 className="text-danger">Your Email is not verified</h3>
        <p>Verified email first</p>
        <button
          className="btn btn-primary"
          onClick={async () => {
            await sendEmailVerification();
            toast.success("Sent email");
          }}
        >
          Send verification email again
        </button>
      </div>
    );
  }
  return children;
};

export default RequireAuth;
