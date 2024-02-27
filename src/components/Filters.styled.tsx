import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { AppDispatch, RootState } from "../store/state";
import { setFilter } from "../store/todo/todoSlice";

// TODO: make filters work
export const Filters: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filter = useSelector((state: RootState) => state.todo.filter);

  return (
    <FilterOptionList>
      <FilterOptionItem>
        <FilterOptionButton
          $active={filter === "all"}
          onClick={() => dispatch(setFilter("all"))}
        >
          All
        </FilterOptionButton>
      </FilterOptionItem>
      <FilterOptionItem>
        <FilterOptionButton
          $active={filter === "active"}
          onClick={() => dispatch(setFilter("active"))}
        >
          Active
        </FilterOptionButton>
      </FilterOptionItem>
      <FilterOptionItem>
        <FilterOptionButton
          $active={filter === "completed"}
          onClick={() => dispatch(setFilter("completed"))}
        >
          Completed
        </FilterOptionButton>
      </FilterOptionItem>
    </FilterOptionList>
  );
};

const FilterOptionList = styled.ul`
  display: flex;
  gap: 1.125rem;
  justify-content: center;

  padding: 0;
  margin: 0;
`;

const FilterOptionItem = styled.li``;

interface FilterOptionButtonProps {
  $active?: boolean;
}

const FilterOptionButton = styled.button<FilterOptionButtonProps>`
  background: none;
  border: none;
  font-weight: var(--fw-bold);
  padding: 0;
  font-size: var(--fs-md);

  ${(props) =>
    props.$active
      ? css`
          color: ${(props) => props.theme.textColored};
        `
      : css`
          color: ${(props) => props.theme.textSecondary};
        `}
`;
