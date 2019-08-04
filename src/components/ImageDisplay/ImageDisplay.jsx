import React, { useContext, Fragment } from "react";
import { AppContext } from "../App/AppContext";
import ImageCard from './ImageCard';

const ImageDisplay = props => {
  const { data } = useContext(AppContext);
  return (
    <Fragment>
      {data.map(pic => {
        return <ImageCard pic={pic} key={pic.id} />;
      })}
    </Fragment>
  );
};

export default ImageDisplay;
