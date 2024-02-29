import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 1.25rem 1.25rem;
  background-color: ${(props) => props.theme.container};
  border-radius: 0.3125rem;
  box-shadow: 0px 35px 50px -15px ${(props) => (props.theme.name === "dark" ? "hsla(0, 0%, 0%, 0.5)" : "hsla(237, 20%, 80%, 0.5)")};
  overflow: hidden;

  @media only screen and (min-width: 37.5em) {
    padding: 1.25rem 1.5rem 0.6rem;
  }
`;
