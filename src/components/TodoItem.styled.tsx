import styled from "styled-components";
import { CheckboxWithLabel } from "./CheckboxWithLabel.styled";
// @ts-ignore
import IconCross from "../assets/images/icon-cross.svg?react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/state";
import { deleteTodo, toggleCompleted } from "../store/todo/todoSlice";

interface TodoItemProps {
  todo: { title: string; isCompleted: boolean };
  index: number;
}

export const TodoItem: React.FC<TodoItemProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>();

  const onDelete = () => {
    dispatch(deleteTodo(props.index));
  };

  const toggleChecked = () => {
    dispatch(toggleCompleted(props.index));
  };

  return (
    <TodoItemContainer>
      <ItemInfo>
        <CheckboxWithLabel
          title={props.todo.title}
          isChecked={props.todo.isCompleted}
          onCheck={toggleChecked}
        />
      </ItemInfo>
      <RemoveButton
        onClick={onDelete}
        aria-label="Remove task"
      >
        <IconCross aria-hidden="true" />
      </RemoveButton>
    </TodoItemContainer>
  );
};

const TodoItemContainer = styled.li`
  padding-block: 1rem;
  position: relative;
  display: flex;
  justify-content: space-between;

  &:first-child {
    padding-top: 0;
    padding-bottom: 1rem;
  }

  &::before {
    content: "";
    position: absolute;
    width: 9999px;
    height: 1px;
    left: -1000px;
    bottom: 0;
    background-color: ${(props) => props.theme.divider};
  }
`;

const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const RemoveButton = styled.button`
  border: none;
  background: none;
  margin: 0;
  padding: 0;

  & > svg {
    display: block;
    max-width: 0.75rem;
  }
`;
