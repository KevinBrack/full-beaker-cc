import React, { useState } from "react";
import { Star, Thumb } from "../../Icons/index";
import "./Likes.scss";
const Likes = props => {
  const { pic } = props;
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="social-container">
      <div className="social-likes">
        {liked ? pic.likes + 1 : pic.likes}
        <div onClick={handleLike}>
          <Thumb />
        </div>
      </div>
      <div className="social-favorites">
        {pic.favorites}
        <Star />
      </div>
    </div>
  );
};

export default Likes;
