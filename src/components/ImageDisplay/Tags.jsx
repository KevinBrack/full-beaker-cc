import React from 'react';
import './Tags.scss';

const Tags = props => {
  const {pic} = props;
  const tagsArr = pic.tags.split(", ")
  console.log("TAGS: ", tagsArr);
  const tagsDisplay = tagsArr.map(tag => {
    return <div className="tag">{tag}</div>
  })
  return <div className="tag-container">{tagsDisplay}</div>;
}

export default Tags;