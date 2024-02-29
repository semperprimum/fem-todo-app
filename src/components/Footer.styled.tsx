import styled from "styled-components";

export const Footer = () => {
  return (
    <FooterContainer>
      <Text>Drag and drop to reorder list</Text>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  text-align: center;
  margin-top: 2.5rem;

  @media only screen and (min-width: 37.5em) {
    margin-top: 1.6rem;
  }
`;

const Text = styled.p`
  font-size: var(--fs-md);
  color: ${(props) => props.theme.textSecondary};
`;
