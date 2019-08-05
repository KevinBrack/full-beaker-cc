import React from "react";
import { Star, Thumb } from "../Icons/index";
import "./Likes.scss";
const Likes = props => {
  const { pic } = props;
  console.log("PIC: ", pic);
  return (
    <div className="social-container">
      <div className="social-likes">
        {pic.likes}
        <Thumb />
      </div>
      <div className="social-favorites">
        {pic.favorites}
        <Star />
      </div>
    </div>
  );
};

export default Likes;
