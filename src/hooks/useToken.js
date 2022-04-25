import { async } from "@firebase/util";
import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    // asunc function
    const getToken = async () => {
      console.log("user", user);
      const email = user?.user?.email;
      if (email) {
        const { data } = await axios.post(
          "https://sheltered-everglades-57475.herokuapp.com/login",
          { email }
        );
        setToken(data.accessToken);
        localStorage.setItem("accessToken", data.accessToken);
      }
    };
    getToken();
  }, [user]);

  return [token];
};
export default useToken;
