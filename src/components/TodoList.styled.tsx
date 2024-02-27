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

export const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch<AppDispatch>();
  const filter = useSelector((state: RootState) => state.todo.filter);

  const getIncompleteTodoCount = (): number => {
    return todos.filter((todo) => !todo.isCompleted).length;
  };

  const handleOnDragEnd = (result: DropResult) => {
    dispatch(handleDragEnd(result));
  };

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case "all":
        return true;
      case "active":
        return !todo.isCompleted;
      case "completed":
        return todo.isCompleted;
    }
  });

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
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 1rem;
`;

const ItemCount = styled.span`
  color: ${(props) => props.theme.textSecondary};
`;

const ClearButton = styled.button`
  border: none;
  background: none;

  color: ${(props) => props.theme.textSecondary};
`;
