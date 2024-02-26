// @ts-ignore it doesn't like the `?react`
import IconMoon from "../assets/images/icon-moon.svg?react";
// @ts-ignore
import IconSun from "../assets/images/icon-sun.svg?react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import styled from "styled-components";

export const Header = () => {
  const context = useContext(ThemeContext);

  return (
    <HeaderContainer>
      <Title>Todo</Title>
      <IconButton
        aria-label={
          context?.currentTheme === "light"
            ? "Enable dark theme"
            : "Disable dark theme"
        }
        onClick={context?.toggleTheme}
      >
        {context?.currentTheme === "light" ? (
          <IconMoon aria-hidden="true" />
        ) : (
          <IconSun aria-hidden="true" />
        )}
      </IconButton>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  color: #ffffff;
  font-weight: var(--fw-bold);
  font-size: var(--fs-lg);
  text-transform: uppercase;
  letter-spacing: 0.5625rem;
  line-height: 1;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;

  & > svg {
    display: block;
  }
`;