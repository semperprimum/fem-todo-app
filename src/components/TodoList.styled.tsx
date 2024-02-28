import styled from "styled-components";
import { Container } from "./Container.styled";
import { TodoItem } from "./TodoItem.styled";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/state";
import { clearCompleted, handleDragEnd } from "../store/todo/todoSlice";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "@hello-pangea/dnd";
import { useMedia } from "../hooks/useMedia";
import { Filters } from ".";
import { useMemo } from "react";

export const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch<AppDispatch>();
  const filter = useSelector((state: RootState) => state.todo.filter);

  const isMatching = useMedia("(min-width: 37.5em)");

  const getIncompleteTodoCount = (): number => {
    return todos.filter((todo) => !todo.isCompleted).length;
  };

  const handleOnDragEnd = (result: DropResult) => {
    dispatch(handleDragEnd(result));
  };

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      switch (filter) {
        case "all":
          return true;
        case "active":
          return !todo.isCompleted;
        case "completed":
          return todo.isCompleted;
        default:
          return true;
      }
    });
  }, [todos, filter]);

  return (
    <Container>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <List
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {filteredTodos.map((todo, index) => (
                <Draggable
                  key={todo.id}
                  draggableId={todo.id}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <TodoItem
                      provided={provided}
                      key={todo.id}
                      todo={todo}
                      dragging={snapshot.isDragging}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>

      <BottomBar>
        <ItemCount>{getIncompleteTodoCount()} Items left</ItemCount>
        {isMatching && <Filters />}
        <ClearButton onClick={() => dispatch(clearCompleted())}>
          Clear Completed
        </ClearButton>
      </BottomBar>
    </Container>
  );
};

const List = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: -1rem;
`;

const BottomBar = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 1rem;
  align-items: center;

  @media only screen and (min-width: 37.5em) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ItemCount = styled.span`
  color: ${(props) => props.theme.textSecondary};
  font-size: var(--fs-md);
`;

const ClearButton = styled.button`
  border: none;
  background: none;
  text-align: end;
  font-size: var(--fs-md);

  color: ${(props) => props.theme.textSecondary};
`;
