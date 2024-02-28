import styled from "styled-components";

interface CheckboxWithLabelProps {
  title: string;
  isChecked: boolean;
  onCheck: () => any;
}

export const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = (props) => {
  return (
    <CheckboxContainer>
      <Checkbox
        onChange={() => props.onCheck()}
        checked={props.isChecked}
        type="checkbox"
      />
      <Text>{props.title}</Text>
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled.label`
  display: grid;
  grid-template-columns: 1.25rem auto;
  gap: 0.75rem;
`;

const Checkbox = styled.input`
  -webkit-appearance: none;
  appearance: none;
  margin: 0;

  height: 1.25rem;
  width: 1.25rem;
  outline: 1px solid ${(props) => props.theme.divider};
  outline-offset: -1px;
  border-radius: 50%;
  overflow: hidden;
  transition: outline-color 150ms ease;

  display: grid;
  place-items: center;

  &::before {
    content: url("/images/icon-check.svg");
    position: relative;
    z-index: 999;
    display: grid;
    place-content: center;
    border-radius: 100vmax;
    background-image: linear-gradient(
      135deg,
      rgba(84, 220, 255, 1) 0%,
      rgba(191, 87, 243, 1) 100%
    );
    background-position: center center;
    height: 100%;
    width: 100%;
    transform: scale(0);
    transition: transform 150ms ease;
  }

  &:checked {
    outline-color: transparent;

    &::before {
      transform: scale(1);
    }
  }
`;

const Text = styled.p``;
