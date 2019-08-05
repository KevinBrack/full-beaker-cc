import React, { Fragment, useContext } from "react";
import { AppContext } from "../../App/AppContext";

const Thumbnail = props => {
  const { pic } = props;
  const { favorites, delFav, addFav } = useContext(AppContext);

  const handleAdd = () => {
    addFav(pic.id);
  };

  const handleRemove = () => {
    delFav(pic.id);
  };

  return (
    <Fragment>
      <a
        href={pic.largeImageURL}
        key={pic.id}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={pic.previewURL} alt={pic.tags} />
      </a>
    </Fragment>
  );
};

export default Thumbnail;
