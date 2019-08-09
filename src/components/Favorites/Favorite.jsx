import React from "react";
import Open from "../../static/images/icons/open.svg";

const Favorite = props => {
  const { favorite } = props;

  return (
    <a href={favorite.largeImageURL} target="_blank" rel="noopener noreferrer">
      <div className="favorite-item">
        <span>#{favorite.id}</span>
        <img src={Open} className="open-icon" alt="Open" />
      </div>
    </a>
  );
};

export default Favorite;
