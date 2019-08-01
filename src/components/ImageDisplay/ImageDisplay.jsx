import React from "react";

const ImageDisplay = props => {
  const { data } = props;
  return (
    <div>
      {data.map(pic => {
        return (
          <a href={pic.largeImageURL} key={pic.id}>
            <img src={pic.previewURL} alt={pic.tags} />
          </a>
        );
      })}
    </div>
  );
};

export default ImageDisplay;
