import React from "react";
import { useSelector } from "react-redux";
import { URL } from "../../App";

const UserImage = ({ imgHeight }) => {
  const loggedInUser = useSelector((state) => state.user);

  return (
    <>
      {loggedInUser.user?.data.data.photo && (
        <img
          crossOrigin="anonymous"
          src={`${URL}/img/users/${loggedInUser.user.data.data.photo}`}
          alt="userPhoto"
          className={`${imgHeight} rounded-full`}
        />
      )}
    </>
  );
};

export default UserImage;
