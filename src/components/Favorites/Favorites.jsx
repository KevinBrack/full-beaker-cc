import React, { useContext } from "react";
import Favorite from "./Favorite";
import { AppContext } from "../App/AppContext";

const Favorites = props => {
  const { favorites } = useContext(AppContext);
  return (
    <div>
      {Object.keys(favorites).map(fav => {
        return <Favorite favorite={fav} key={fav} />;
      })}
    </div>
  );
};

export default Favorites;
