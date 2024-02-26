import styled from "styled-components";
import { Container } from "./Container.styled";
import { TodoItem } from "./TodoItem.styled";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/state";
import { clearCompleted } from "../store/todo/todoSlice";

export const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch<AppDispatch>();

  const getIncompleteTodoCount = (): number => {
    return todos.filter((todo) => !todo.isCompleted).length;
  };

  // TODO: implement drag&drop

  return (
    <Container>
      <List>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
          />
        ))}
      </List>

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
