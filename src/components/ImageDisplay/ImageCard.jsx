import React from "react";
import Thumbnail from './Thumbnail';
import SavedDisplay from './SavedDisplay';
import Tags from './Tags';
import Likes from './Likes';
import './ImageCard.scss'

const ImageCard = props => {
  const { pic } = props;

  return (
    <div className="image-card">
      <Thumbnail pic={pic}/>
      <Tags pic={pic} />
      <SavedDisplay pic={pic}/>
      <Likes pic={pic} />
    </div>
  );
};

export default ImageCard;
