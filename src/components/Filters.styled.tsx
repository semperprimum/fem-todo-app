import styled, { css } from "styled-components";

// TODO: make filters work
export const Filters: React.FC = () => {
  return (
    <FilterOptionList>
      <FilterOptionItem>
        <FilterOptionButton>All</FilterOptionButton>
      </FilterOptionItem>
      <FilterOptionItem>
        <FilterOptionButton>Active</FilterOptionButton>
      </FilterOptionItem>
      <FilterOptionItem>
        <FilterOptionButton>Completed</FilterOptionButton>
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
