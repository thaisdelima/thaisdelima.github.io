import React, { Component } from "react";
import styled from "styled-components";
const Button = styled.button`
  color: #444972;

  font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: 79.04%;
  background: #dbd6f4;
  border: 0;
  letter-spacing: -0.02em;
  outline: 0;
  padding: 1.5rem 2rem;
  font-size: 2rem;
  text-transform: uppercase;
  box-shadow: 0px 5px 10px #dbd6f4;
  transition: all 0.3s;
  cursor: pointer;
  border-radius: 5px;
  border-bottom: 4px solid #ffffff;
  &:hover {
    box-shadow: 0px 15px 25px -5px #dbd6f4;
    transform: scale(1.03);
  }
  &:active {
    box-shadow: 0px 4px 8px #dbd6f4;
    transform: scale(0.98);
  }
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
