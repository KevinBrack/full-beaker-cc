import React, { useContext } from "react";
import { AppContext } from "../App/AppContext";
import ImageCard from "./ImageCard";

const ImageDisplay = props => {
  const { data } = useContext(AppContext);
  return (
    <div className="image-display-container">
      {data.map(pic => {
        return <ImageCard pic={pic} key={pic.id} />;
      })}
    </div>
  );
};

export default ImageDisplay;
