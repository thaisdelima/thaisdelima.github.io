import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const Button = styled.div`
  color: #f3eefe;
  width: 200;
  display: flex;
  justify-content: center;
  padding: 3em;
`;

export default class BioSocial extends Component {
  render() {
    return (
      <div>
        <Button
          onClick={(e) => {
            e.preventDefault();
            window.open("https://www.github.com/thaisdelima");
          }}>
          <FontAwesomeIcon
            style={{ cursor: "pointer" }}
            size="5x"
            icon={faGithub}
          />
        </Button>
      </div>
    );
  }
}
