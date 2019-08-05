import React, { Fragment } from "react";

const Thumbnail = props => {
  const { pic } = props;

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
