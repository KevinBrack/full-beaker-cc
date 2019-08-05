import React, { useContext } from "react";
import { AppContext } from "../../App/AppContext";
import "./SavedDisplay.scss";

const SavedDisplay = props => {
  const { pic } = props;
  const { favorites, delFav, addFav } = useContext(AppContext);

  const handleAdd = () => {
    addFav(pic);
  };

  const handleRemove = () => {
    delFav(pic);
  };

  // console.log("FAVORITES: ", favorites);
  if (favorites[pic.id]) {
    return (
      <div className="fav-saved fav" onClick={handleRemove}>
        Saved
      </div>
    );
  } else {
    return (
      <div className="fav-unsaved fav" onClick={handleAdd}>
        Save
      </div>
    );
  }
};

export default SavedDisplay;
