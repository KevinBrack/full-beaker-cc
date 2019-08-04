import React from "react";
import Thumbnail from "./Thumbnail";

const ImageDisplay = props => {
  const { data, favorites, delFav, addFav } = props;
  return (
    <div>
      {data.map(pic => {
        return (
          <Thumbnail
            pic={pic}
            key={pic.id}
            favorites={favorites}
            delFav={delFav}
            addFav={addFav}
          />
        );
      })}
    </div>
  );
};

export default ImageDisplay;
