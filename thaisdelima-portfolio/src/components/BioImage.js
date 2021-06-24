import React from "react";
import styled from "styled-components";

import image from "../images/imageBio.png";

const Wrapper = styled.section`
  padding: 3em;
  background: #444972;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Img = styled.img`
  /* width: 50vw; */
`;

export default class BioImage extends React.Component {
  render() {
    return (
      <Wrapper>
        <Img src={image} alt="Thais de lima" />
      </Wrapper>
    );
  }
}
