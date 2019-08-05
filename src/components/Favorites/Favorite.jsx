import React, { Fragment, useContext } from "react";
import { AppContext } from "../App/AppContext";
import Open from "../../static/images/icons/open.svg";

const Favorite = props => {
  // const { delFav } = useContext(AppContext);
  const { favorite } = props;

  return (
    <div className="favorite-item">
      <span>#{favorite}</span>
      <img src={Open} className="open-icon" />
    </div>
  );
};

export default Favorite;
