import React, { useContext } from "react";
import Thumbnail from "./Thumbnail";
import { AppContext } from "../App/AppContext";

const ImageDisplay = props => {
  const { data } = useContext(AppContext);
  // need data
  // thumbnail needs favorites, delFav, addFav
  return (
    <div>
      {data.map(pic => {
        return <Thumbnail pic={pic} key={pic.id} />;
      })}
    </div>
  );
};

export default ImageDisplay;
