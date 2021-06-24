import React from "react";
import ContactMe from "components/ContactMe";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 4em;
  background: #444972;
`;
const Title = styled.div`
  padding-bottom: 3vh;
`;

const FontTitle = styled.div`
  color: #ffffff;
  font-family: "Satisfy", cursive;
  font-size: 7vw;
  letter-spacing: -0.02em;
  line-height: 76px;
`;

const FontBio = styled.div`
  color: #ffffff;
  font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  text-align: left;
  font-size: 2vw;
`;

const FontStacks = styled.div`
  color: #ffffff;
  font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 1vw;
  font-style: italic;
  text-align: center;
  padding: 1vh;
`;
export default class Bio extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>
          <FontTitle>Hi,</FontTitle>
          <FontTitle>my name is Thaís</FontTitle>
        </Title>
        <FontBio>I'm a self taught web developer based in Brazil.</FontBio>
        <FontBio>
          Who loves to travel and make beautiful websites and games.
        </FontBio>
        <FontStacks>Javascript | Vue | Phaser 3 | React </FontStacks>
        <ContactMe />
      </Wrapper>
    );
  }
}
