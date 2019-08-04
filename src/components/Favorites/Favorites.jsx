import React from "react";
import Favorite from "./Favorite";

const Favorites = props => {
  const { favorites, delFav } = props;
  return (
    <div>
      {Object.keys(favorites).map(fav => {
        return <Favorite favorite={fav} delFav={delFav} />;
      })}
    </div>
  );
};

export default Favorites;
