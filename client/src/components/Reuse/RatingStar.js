import React from "react";

const RatingStar = ({ rating }) => {
  const empty = Math.floor(5 - rating);
  let emptyStar = [];
  for (let i = 0; i < empty; i++)
    emptyStar.push(<ion-icon name="star-outline" key={i}></ion-icon>);

  const floorating = Math.floor(rating);
  let content = [];
  for (let i = 0; i < floorating; i++)
    content.push(<ion-icon name="star" key={i}></ion-icon>);

  return (
    <span className="flex text-orange-500">
      {content}
      {rating.toString().split(".")[1] && (
        <ion-icon name="star-half"></ion-icon>
      )}
      {emptyStar}
    </span>
  );
};

export default RatingStar;
