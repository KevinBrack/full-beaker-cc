import React from "react";
import Thumbnail from "./Thumbnail/Thumbnail";
import SavedDisplay from "./Save/SavedDisplay";
import Tags from "./Tags/Tags";
import Likes from "./Social/Likes";
import "./ImageCard.scss";

const ImageCard = props => {
  const { pic } = props;

  return (
    <div className="image-card">
      <Thumbnail pic={pic} />
      <Tags pic={pic} />
      <SavedDisplay pic={pic} />
      <Likes pic={pic} />
    </div>
  );
};

export default ImageCard;
