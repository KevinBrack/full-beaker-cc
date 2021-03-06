import React from "react";
import styled from "styled-components";

const Thumbnail = props => {
  const { pic } = props;

  const Background = styled.div`
  background-image: url("${pic.previewURL}");
  background-position: center;
  background-size: cover;
  height: 99px;
  width: 150px;
  `;

  return (
    <a
      href={pic.largeImageURL}
      key={pic.id}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Background />
    </a>
  );
};

export default Thumbnail;
