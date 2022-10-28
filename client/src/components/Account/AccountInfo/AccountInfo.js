import React from "react";
import { useParams } from "react-router-dom";
import Profile from "./Profile";
import MyCart from "./MyCart";
import RatingsReviews from "./RatingsReviews";

const AccountInfo = () => {
  const params = useParams();
  let content = <p>{params.accountId}</p>;

  if (params.accountId === "profile") content = <Profile />;
  if (params.accountId === "cart") content = <MyCart />;
  if (params.accountId === "ratings&reviews") content = <RatingsReviews />;

  if (params.accountId === "my-order") content = <RatingsReviews />;

  return <>{content}</>;
};

export default AccountInfo;
