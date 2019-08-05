import React, { useContext } from "react";
import Favorite from "./Favorite";
import { AppContext } from "../App/AppContext";
import "./Favorites.scss";

const Favorites = props => {
  const { favorites } = useContext(AppContext);
  return (
    <div className="favorites-container">
      <div className="favorites-header">Saved</div>
      {Object.keys(favorites).map(fav => {
        return <Favorite favorite={fav} key={fav} />;
      })}
    </div>
  );
};

export default Favorites;
