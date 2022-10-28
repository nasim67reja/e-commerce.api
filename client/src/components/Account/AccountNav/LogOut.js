import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { URL } from "../../../App";

const LogOut = () => {
  const navigate = useNavigate();
  const LogOut = async () => {
    try {
      await axios.get(`${URL}/api/v1/users/logout`);

      setTimeout(() => {
        navigate("/login");
        document.location.reload();
      }, 500);
    } catch (error) {
      console.log(`error: `, error);
    }
  };
  const logoutHandler = () => {
    LogOut();
  };

  return (
    <>
      <button className=" rounded-md bg-white py-2 " onClick={logoutHandler}>
        <span className="mr-2 inline-block translate-y-[2px]">
          <ion-icon name="log-out-outline"></ion-icon>
        </span>
        <span>Log Out</span>
      </button>
    </>
  );
};

export default LogOut;
