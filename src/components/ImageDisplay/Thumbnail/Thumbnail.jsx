import React, { Fragment } from "react";
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
    <Background>
      {/* <a
        href={pic.largeImageURL}
        key={pic.id}
        target="_blank"
        rel="noopener noreferrer"
      > */}
      {/* <img src={pic.previewURL} alt={pic.tags} /> */}
      {/* </a> */}
    </Background>
  );
};

export default Thumbnail;
