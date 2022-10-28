import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import AccountHead from "../components/Account/AccountNav/AccountHead";
import AccountNav from "../components/Account/AccountNav/AccountNav";
import Loading from "../components/Reuse/Loading";

const Account = () => {
  const user = useSelector((state) => state.user.user);
  let loading = false;
  if (user === null) loading = true;

  let isLoggedIn = true;
  if (user === undefined) isLoggedIn = false;

  const navigate = useNavigate();
  return (
    <>
      {loading && (
        <div className="flex h-screen items-center justify-center gap-2">
          <Loading height="20" width="20" />
          <div>Loading..</div>
        </div>
      )}
      {!loading && isLoggedIn && (
        <div className="mx-auto  max-w-[100rem]  px-4 py-12">
          <div className="mx-2 mt-8 grid grid-cols-1  justify-start gap-20 md:mx-0 md:grid-cols-[18%_70%]">
            <div className="relative  hidden flex-col gap-4 md:flex">
              <AccountHead />
              <AccountNav />
            </div>
            <Outlet />
          </div>
        </div>
      )}

      {!isLoggedIn && (
        <>
          <div className="flex h-screen items-center justify-center text-xl">
            you are not logged in 😢. Please logged in to access this route
          </div>
          {setTimeout(() => {
            navigate("/login");
          }, 4000)}
        </>
      )}
    </>
  );
};

export default Account;
