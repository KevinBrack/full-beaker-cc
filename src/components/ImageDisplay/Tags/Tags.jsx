import React, { useContext } from "react";
import "./Tags.scss";
import { AppContext } from "../../App/AppContext";

const Tags = props => {
  const { setParams } = useContext(AppContext);
  const { pic } = props;
  const tagsArr = pic.tags.split(", ");

  const handleTagSelect = tag => {
    const params = `&q=${tag}`;
    setParams(params);
  };

  const tagsDisplay = tagsArr.map(tag => {
    return (
      <div className="tag" key={tag} onClick={() => handleTagSelect(tag)}>
        <span>{tag}</span>
      </div>
    );
  });
  return <div className="tag-container">{tagsDisplay}</div>;
};

export default Tags;
