import React, { Fragment, useContext } from "react";
import { AppContext } from "../App/AppContext";

const Favorite = props => {
  const { delFav } = useContext(AppContext);
  const { favorite } = props;

  const handleDel = () => {
    delFav(favorite);
  };

  return (
    <Fragment>
      <div>
        {favorite}
        <span onClick={handleDel}> remove</span>
      </div>
    </Fragment>
  );
};

export default Favorite;
