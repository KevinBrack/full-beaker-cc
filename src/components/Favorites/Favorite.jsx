import React, { Fragment } from "react";

const Favorite = props => {
  const { favorite, delFav } = props;

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
