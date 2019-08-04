import React, { Fragment } from "react";

const Thumbnail = props => {
  const { pic, favorites, delFav, addFav } = props;

  const handleAdd = () => {
    console.log(`ADDING ${pic.id}`);
    addFav(pic.id);
  };

  const handleRemove = () => {
    console.log(`REMOVING ${pic.id}`);
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
      {/* <div>SAVE</div> */}
      {favorites[pic.id] ? (
        <div onClick={handleRemove}>REMOVE</div>
      ) : (
        <div onClick={handleAdd}>SAVE</div>
      )}
    </Fragment>
  );
};

export default Thumbnail;
