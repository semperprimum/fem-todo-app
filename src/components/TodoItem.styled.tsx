import styled, { css } from "styled-components";
import { CheckboxWithLabel } from "./CheckboxWithLabel.styled";
// @ts-ignore
import IconCross from "../assets/images/icon-cross.svg?react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/state";
import { deleteTodo, toggleCompleted } from "../store/todo/todoSlice";
import { DraggableProvided } from "@hello-pangea/dnd";

interface TodoItemProps {
  todo: { id: string; title: string; isCompleted: boolean };
  provided: DraggableProvided;
  dragging: boolean;
}

export const TodoItem: React.FC<TodoItemProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>();

  const onDelete = () => {
    dispatch(deleteTodo(props.todo.id));
  };

  const toggleChecked = () => {
    dispatch(toggleCompleted(props.todo.id));
    props.provided.draggableProps.style;
  };

  return (
    <TodoItemContainer
      {...props.provided.draggableProps}
      {...props.provided.dragHandleProps}
      ref={props.provided.innerRef}
      $dragging={props.dragging}
    >
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

interface TodoItemContainerProps {
  $dragging: boolean;
}

const TodoItemContainer = styled.li<TodoItemContainerProps>`
  padding-block: 1rem;
  position: relative;
  display: flex;
  justify-content: space-between;

  &::before {
    content: "";
    position: absolute;
    width: 9999px;
    height: 1px;
    left: -1000px;
    bottom: 0;
    background-color: ${(props) => props.theme.divider};
  }

  ${(props) =>
    props.$dragging &&
    css`
      &::before {
        background-color: transparent;
      }
    `}
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
