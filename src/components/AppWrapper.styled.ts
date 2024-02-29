import styled from "styled-components";

export const AppWrapper = styled.div`
  width: calc(100% - 3rem);
  padding-top: 3rem;
  margin-inline: auto;
  display: grid;
  gap: 1rem;

  @media only screen and (min-width: 37.5em) {
    max-width: 33.75rem;
    gap: 1.5rem;
    padding-top: 4.875rem;
  }
`;
