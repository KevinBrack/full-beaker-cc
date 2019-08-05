import React, { useState, useContext } from "react";
import { Star, StarActive, Thumb, ThumbActive } from "../../Icons/index";
import "./Likes.scss";
import { AppContext } from "../../App/AppContext";
const Likes = props => {
  const { pic } = props;
  const { favorites, addFav, delFav } = useContext(AppContext);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleFav = () => {
    if (favorites[pic.id]) {
      delFav(pic);
    } else {
      addFav(pic);
    }
  };

  const ThumbSwitch = () => {
    if (liked) {
      return <ThumbActive />;
    } else {
      return <Thumb />;
    }
  };

  const StarSwitch = () => {
    if (favorites[pic.id]) {
      return <StarActive />;
    } else {
      return <Star />;
    }
  };

  return (
    <div className="social-container">
      <div className="social-likes">
        <span className="social-text">{liked ? pic.likes + 1 : pic.likes}</span>
        <div onClick={handleLike}>
          <ThumbSwitch />
        </div>
      </div>
      <div className="social-favorites">
        <span className="social-text">
          {favorites[pic.id] ? pic.favorites + 1 : pic.favorites}
        </span>
        <div onClick={handleFav}>
          <StarSwitch />
        </div>
      </div>
    </div>
  );
};

export default Likes;
