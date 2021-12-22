import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  margin: 2rem;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;

  a {
    color: #ffffff;
    padding: 1rem;
    text-decoration: none;
    font-size: 1rem;

    &:hover {
      font-weight: 800;
      text-decoration: underline;
      font-size: 1.2rem;
    }
  }
`;

export { Nav, StyledUl };
