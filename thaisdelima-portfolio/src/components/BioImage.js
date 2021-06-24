import React from "react";
import styled from "styled-components";

import image from "../images/imageBio.png";

const Wrapper = styled.section`
  padding: 4em;
  background: #444972;
`;

export default class BioImage extends React.Component {
  render() {
    return (
      <Wrapper>
        <img src={image} alt="Thais de lima" />
      </Wrapper>
    );
  }
}
