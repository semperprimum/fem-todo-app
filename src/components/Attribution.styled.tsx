import styled from "styled-components";

export const Attribution = () => {
  return (
    <AttributionContainer>
      Challenge by <a href="https://frontendmentor.io">Frontend Mentor</a>.
      <br />
      Coded by <a href="https://github.com/semperprimum">Bogdan Kim</a>.
    </AttributionContainer>
  );
};

const AttributionContainer = styled.div`
  text-align: center;
  margin-top: 0.5rem;
  font-size: var(--fs-sm);

  & > a {
    color: ${(props) => props.theme.textColored};
  }

  @media only screen and (min-width: 50em) {
    text-align: start;
    position: fixed;
    left: 1rem;
    bottom: 1rem;
    font-weight: var(--fw-bold);

    & > a {
      position: relative;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: ${(props) => props.theme.textColored};
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 150ms ease;
      }

      &:hover::before {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }
`;
