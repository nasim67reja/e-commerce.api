import React from "react";
import { useSelector } from "react-redux";
import UserImage from "../UserImage";

const AccountHead = () => {
  const loggedInUser = useSelector((state) => state.user);

  return (
    <>
      {loggedInUser.user && (
        <div>
          <div className="flex w-full items-center  gap-4  rounded-sm bg-white p-4 shadow-lg ">
            <div>
              <UserImage imgHeight="h-14" />
            </div>
            <div className="flex flex-col">
              <span
                className="text-sm
              "
              >
                Hello,
              </span>
              <span>{loggedInUser.user.data.data.name}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccountHead;
