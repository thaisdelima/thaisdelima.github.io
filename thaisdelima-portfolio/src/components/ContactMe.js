import React, { Component } from "react";
import styled from "styled-components";
const Button = styled.button`
  color: #444972;
  width: 251px;
  height: 62px;
  font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 79.04%;
  background: #dbd6f4;
  border-radius: 9px;
  border: 0vh;
  /* or 28px */

  letter-spacing: -0.02em;
`;
const Wrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 2vh;
`;

export default class ContactMe extends Component {
  render() {
    return (
      <Wrapper>
        <Button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.open("https://www.linkedin.com/in/thaisdelima");
          }}>
          Contact Me
        </Button>
      </Wrapper>
    );
  }
}
