import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { AppDispatch } from "../store/state";
import { add } from "../store/todo/todoSlice";

export const Input: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title === "") return;

    dispatch(add(title));
    setTitle("");
  };

  return (
    <InputContainer>
      <Circle aria-hidden="true" />
      <form onSubmit={onSubmit}>
        <InputField
          onChange={onChangeInput}
          value={title}
          placeholder="Create a new todo..."
        />
      </form>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  margin-top: 1.5rem;

  background-color: ${(props) => props.theme.container};
  padding: 0.875rem 1.25rem;
  border-radius: 0.3125rem;
  box-shadow: 0px 35px 50px -15px ${(props) => (props.theme.name === "dark" ? "hsla(0, 0%, 0%, 0.5)" : "hsl(237, 20%, 80%, 0.5)")};

  caret-color: ${(props) => props.theme.textColored};

  @media only screen and (min-width: 37.5em) {
    padding: 1.1rem 1.5rem;
    gap: 1.5rem;
    margin-top: 1rem;
  }
`;

const InputField = styled.input`
  background: none;
  border: none;
  color: ${(props) => props.theme.text};
  outline: none;
  font-size: var(--fs-sm);

  &::placeholder {
    color: ${(props) => props.theme.placeholder};
    letter-spacing: -0.25px;
  }
`;

const Circle = styled.div`
  width: 1.25rem;
  border: 1px solid ${(props) => props.theme.divider};
  aspect-ratio: 1;
  border-radius: 100%;

  @media only screen and (min-width: 37.5em) {
    width: 1.5rem;
  }
`;
