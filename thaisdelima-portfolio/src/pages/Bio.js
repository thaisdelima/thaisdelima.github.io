import React from 'react';
import ContactMe from 'components/ContactMe';
import styled from 'styled-components';
import BioSocial from 'components/BioSocial';

const Wrapper = styled.section`
  padding: 3em;
  /* background: #444972; */
  background-image: url('../images/bg.svg');
  /* max-width: 60vw; */
`;
const Title = styled.div`
  padding-bottom: 3em;
`;

const FontTitle = styled.div`
  color: #ffffff;
  font-family: 'Satisfy', cursive;
  font-size: 7em;
  letter-spacing: -0.02em;
  line-height: 1em;
`;

const FontBio = styled.div`
  color: #ffffff;
  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  text-align: left;
  font-size: 2em;
`;

const FontStacks = styled.div`
  color: #ffffff;
  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  font-size: 1em;
  font-style: italic;
  text-align: center;
  padding: 1em;
`;
export default class Bio extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>
          <FontTitle>Hi,</FontTitle>
          <FontTitle>my name is Thaís</FontTitle>
        </Title>
        <FontBio>
          I'm a self taught web developer based in Brazil, who loves to travel
          and make beautiful websites and games.
        </FontBio>
        <FontStacks>Javascript | Vue | Phaser 3 | React </FontStacks>
        <ContactMe />
        <BioSocial />
      </Wrapper>
    );
  }
}
