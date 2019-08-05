import React, { Fragment, useContext } from "react";
import { AppContext } from "../App/AppContext";
import Open from "../../static/images/icons/open.svg";

const Favorite = props => {
  // const { delFav } = useContext(AppContext);
  const { favorite } = props;

  return (
    <a href={favorite.largeImageURL} target="_blank" rel="noopener noreferrer">
      <div className="favorite-item">
        <span>#{favorite.id}</span>
        <img src={Open} className="open-icon" />
      </div>
    </a>
  );
};

export default Favorite;
